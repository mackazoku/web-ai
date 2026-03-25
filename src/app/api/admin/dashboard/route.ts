import {NextResponse} from 'next/server';

import {getServerSession} from 'next-auth';

import {authOptions} from '@/modules/admin/auth/auth-options';
import {prisma} from '@/modules/shared/db/prisma';

const formatTimeAgo = (date: Date) => {
  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.max(1, Math.floor(diffMs / (1000 * 60)));
  if (diffMinutes < 60) return `${diffMinutes}m`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d`;
};

const formatTimeRange = (startAt: Date, endAt: Date) => {
  const format = (value: Date) =>
    value.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
  return `${format(startAt)}-${format(endAt)}`;
};

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const dateParam = searchParams.get('date');

  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  const status = session?.user?.status;
  const allowedRoles = new Set(['admin', 'receptionist', 'staff']);
  const isAllowed = !!role && status === 'active' && allowedRoles.has(role);

  if (!isAllowed) {
    return NextResponse.json({code: 'forbidden', message: 'Forbidden'}, {status: 403});
  }

  const today = new Date();
  const selectedDate = dateParam ? new Date(dateParam) : today;
  const baseDate = Number.isNaN(selectedDate.getTime()) ? today : selectedDate;
  const dayStart = new Date(baseDate);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(baseDate);
  dayEnd.setHours(23, 59, 59, 999);

  const sessionUserId = session?.user?.id ?? undefined;
  const sessionEmail = session.user?.email ?? undefined;
  const sessionName =
    session.user?.name ??
    (sessionEmail
      ? (await prisma.user.findUnique({where: {email: sessionEmail}}))?.name
      : undefined);
  const staffFilter =
    role === 'staff' && sessionUserId ? {staffId: sessionUserId} : {};

  const [totalBookings, activeBookings, cancelledBookings, bookingRevenue, pendingBookings, recentBookings, scheduleBookings] =
    await Promise.all([
      prisma.booking.count({where: {...staffFilter}}),
      prisma.booking.count({
        where: {status: {in: ['pending', 'confirmed']}, ...staffFilter},
      }),
      prisma.booking.count({where: {status: 'cancelled', ...staffFilter}}),
      prisma.bookingService.findMany({
        where: {
          booking: {status: {in: ['confirmed', 'completed']}, ...staffFilter},
        },
        include: {service: true},
      }),
      prisma.booking.findMany({
        where: {status: 'pending', ...staffFilter},
        orderBy: {createdAt: 'desc'},
        take: 2,
        include: {services: {include: {service: true}}},
      }),
      prisma.booking.findMany({
        where: {...staffFilter},
        orderBy: {updatedAt: 'desc'},
        take: 3,
        include: {services: {include: {service: true}}},
      }),
      prisma.booking.findMany({
        where: {...staffFilter, startAt: {lt: dayEnd}, endAt: {gt: dayStart}},
        orderBy: {startAt: 'asc'},
        take: 6,
        include: {services: {include: {service: true}}, staff: true, branch: true},
      }),
    ]);

  const revenueCents = bookingRevenue.reduce(
    (sum, item) => sum + (item.service?.priceCents ?? 0),
    0,
  );
  const cancellationRate = totalBookings > 0 ? (cancelledBookings / totalBookings) * 100 : 0;

  const scheduleByBranch = scheduleBookings.reduce<Record<string, any>>((acc, booking) => {
    const branchName = booking.branch?.name ?? 'Branch';
    if (!acc[branchName]) {
      acc[branchName] = {
        key: branchName.toLowerCase().replace(/\s+/g, '-'),
        label: branchName,
        blocks: [],
      };
    }
    const displayEndAt = new Date(booking.startAt.getTime() + 60 * 60 * 1000);
    const serviceName = booking.services[0]?.service?.name ?? 'Service';
    acc[branchName].blocks.push({
      key: booking.id,
      label: serviceName,
      staffName: booking.staff?.name ?? 'Unassigned',
      time: formatTimeRange(booking.startAt, displayEndAt),
      startAt: booking.startAt.toISOString(),
      endAt: displayEndAt.toISOString(),
    });
    return acc;
  }, {});

  const pending = pendingBookings.map((booking) => ({
    key: booking.id,
    name: booking.customerName,
    serviceName: booking.services[0]?.service?.name ?? 'Service',
    duration: booking.services[0]?.service?.durationMinutes
      ? `${booking.services[0].service.durationMinutes}m`
      : '60m',
    timeAgo: formatTimeAgo(booking.createdAt),
  }));

  const activity = recentBookings.map((booking) => {
    const serviceName = booking.services[0]?.service?.name ?? 'Service';
    if (booking.status === 'cancelled') {
      return {
        key: booking.id,
        title: 'Cancellation',
        detail: `${booking.customerName} cancelled "${serviceName}"`,
      };
    }
    if (booking.status === 'confirmed' || booking.status === 'completed') {
      return {
        key: booking.id,
        title: 'Payment received',
        detail: `${serviceName}`,
      };
    }
    return {
      key: booking.id,
      title: 'New booking',
      detail: `${booking.customerName} · ${serviceName}`,
    };
  });

  return NextResponse.json({
    user: {
      name: sessionName ?? 'Admin',
      email: sessionEmail ?? '',
      role: role ?? 'admin',
    },
    stats: [
      {key: 'revenue', valueCents: revenueCents, delta: '—', trend: 'neutral'},
      {key: 'bookings', value: activeBookings, delta: '—', trend: 'neutral'},
      {key: 'cancellations', value: cancellationRate, delta: '—', trend: 'neutral'},
    ],
    schedule: {
      date: baseDate.toISOString(),
      rows: Object.values(scheduleByBranch),
    },
    pending,
    activity,
  });
}
