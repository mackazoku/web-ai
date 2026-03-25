import {NextResponse} from 'next/server';

import {prisma} from '@/modules/shared/db/prisma';

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const branchIdParam = searchParams.get('branchId');
  const serviceIdParam = searchParams.get('serviceId');
  const branchNameParam = searchParams.get('branchName');
  const serviceNameParam = searchParams.get('serviceName');

  const branch = branchIdParam
    ? await prisma.branch.findUnique({where: {id: branchIdParam}})
    : branchNameParam
      ? await prisma.branch.findFirst({
          where: {name: {contains: branchNameParam, mode: 'insensitive'}},
        })
      : null;

  const service = serviceIdParam
    ? await prisma.service.findUnique({where: {id: serviceIdParam}})
    : serviceNameParam
      ? await prisma.service.findFirst({
          where: {
            name: {contains: serviceNameParam, mode: 'insensitive'},
            ...(branch ? {branchId: branch.id} : {}),
          },
        })
      : null;

  const therapists = await prisma.user.findMany({
    where: {
      role: 'staff',
      status: 'active',
      ...(branch ? {branchId: branch.id} : {}),
      ...(service ? {staffServices: {some: {serviceId: service.id}}} : {}),
    },
    orderBy: {name: 'asc'},
    select: {
      id: true,
      name: true,
      branchId: true,
    },
  });

  return NextResponse.json({items: therapists});
}
