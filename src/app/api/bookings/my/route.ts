import {NextResponse} from 'next/server';
import {getServerSession} from 'next-auth';

import {prisma} from '@/modules/shared/db/prisma';
import {authOptions} from '@/modules/admin/auth/auth-options';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user || user.role !== 'customer' || user.status !== 'active' || !user.id) {
    return NextResponse.json(
      {code: 'unauthorized', message: 'Login required.'},
      {status: 401},
    );
  }

  const bookings = await prisma.booking.findMany({
    where: {customerId: user.id},
    orderBy: {startAt: 'desc'},
    include: {
      branch: {select: {name: true}},
      staff: {select: {id: true, name: true}},
      services: {include: {service: true}},
    },
  });

  const items = bookings.map((booking) => ({
    id: booking.id,
    status: booking.status,
    startAt: booking.startAt,
    endAt: booking.endAt,
    branchName: booking.branch.name,
    staffName: booking.staff?.name ?? null,
    services: booking.services.map((serviceLink) => ({
      id: serviceLink.serviceId,
      name: serviceLink.service.name,
      durationMinutes: serviceLink.service.durationMinutes,
      category: serviceLink.service.category ?? null,
    })),
  }));

  return NextResponse.json({items});
}
