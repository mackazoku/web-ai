import {NextResponse} from 'next/server';
import {z} from 'zod';

import {prisma} from '@/modules/shared/db/prisma';

const bookingSchema = z.object({
  customerName: z.string().min(1),
  customerEmail: z.string().email(),
  customerPhone: z.string().optional().nullable(),
  branchName: z.string().min(1),
  serviceName: z.string().min(1),
  staffId: z.string().optional().nullable(),
  startAt: z.string().datetime(),
  endAt: z.string().datetime().optional().nullable(),
  source: z.string().optional().nullable(),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = bookingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {code: 'invalid_payload', message: 'Invalid booking payload.'},
      {status: 400},
    );
  }

  const payload = parsed.data;
  const branch = await prisma.branch.findFirst({
    where: {name: {contains: payload.branchName, mode: 'insensitive'}},
  });

  if (!branch) {
    return NextResponse.json(
      {code: 'branch_not_found', message: 'Branch not found.'},
      {status: 404},
    );
  }

  const service =
    (await prisma.service.findFirst({
      where: {
        branchId: branch.id,
        name: {contains: payload.serviceName, mode: 'insensitive'},
      },
    })) ??
    (await prisma.service.findFirst({
      where: {branchId: branch.id},
      orderBy: {createdAt: 'asc'},
    }));

  if (!service) {
    return NextResponse.json(
      {code: 'service_not_found', message: 'Service not found.'},
      {status: 404},
    );
  }

  let staffId: string | null = null;
  if (payload.staffId) {
    const staff = await prisma.user.findFirst({
      where: {
        id: payload.staffId,
        role: 'staff',
        status: 'active',
        branchId: branch.id,
      },
    });
    if (!staff) {
      return NextResponse.json(
        {code: 'staff_not_found', message: 'Therapist not found.'},
        {status: 404},
      );
    }

    const staffService = await prisma.staffService.findFirst({
      where: {staffId: staff.id, serviceId: service.id},
    });
    if (!staffService) {
      return NextResponse.json(
        {code: 'staff_service_mismatch', message: 'Therapist cannot perform service.'},
        {status: 400},
      );
    }
    staffId = staff.id;
  }

  const startAt = new Date(payload.startAt);
  const endAt = payload.endAt
    ? new Date(payload.endAt)
    : new Date(startAt.getTime() + service.durationMinutes * 60 * 1000);

  if (Number.isNaN(startAt.getTime()) || Number.isNaN(endAt.getTime())) {
    return NextResponse.json(
      {code: 'invalid_datetime', message: 'Invalid datetime.'},
      {status: 400},
    );
  }

  const booking = await prisma.booking.create({
    data: {
      branchId: branch.id,
      staffId,
      customerName: payload.customerName,
      customerEmail: payload.customerEmail,
      customerPhone: payload.customerPhone ?? null,
      startAt,
      endAt,
      status: 'pending',
      source: payload.source ?? 'public',
    },
  });

  await prisma.bookingService.create({
    data: {
      bookingId: booking.id,
      serviceId: service.id,
    },
  });

  return NextResponse.json({id: booking.id});
}
