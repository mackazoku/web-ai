import {NextResponse} from 'next/server';
import bcrypt from 'bcryptjs';
import {Role, UserStatus} from '@prisma/client';

import {requireAdmin} from '@/modules/admin/auth/require-admin';
import {prisma} from '@/modules/shared/db/prisma';

type RouteContext = {
  params: {id: string};
};

export async function PATCH(request: Request, context: RouteContext) {
  const session = await requireAdmin();

  if (!session) {
    return NextResponse.json({code: 'forbidden', message: 'Forbidden'}, {status: 403});
  }

  const body = await request.json();
  const {name, email, password, role, status, phone, branchId, notes} = body ?? {};
  const parsedRole =
    role && Object.values(Role).includes(role as Role) ? (role as Role) : undefined;
  const parsedStatus =
    status && Object.values(UserStatus).includes(status as UserStatus)
      ? (status as UserStatus)
      : undefined;

  const data: Record<string, unknown> = {
    name,
    email,
    role: parsedRole,
    status: parsedStatus,
    phone: phone ?? null,
    branchId: branchId ?? null,
    notes: notes ?? null,
  };

  if (password) {
    data.passwordHash = await bcrypt.hash(password, 10);
  }

  try {
    const user = await prisma.user.update({
      where: {id: context.params.id},
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        status: true,
        branchId: true,
        notes: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({code: 'not_found', message: 'User not found'}, {status: 404});
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const session = await requireAdmin();

  if (!session) {
    return NextResponse.json({code: 'forbidden', message: 'Forbidden'}, {status: 403});
  }

  try {
    const user = await prisma.user.update({
      where: {id: context.params.id},
      data: {status: 'disabled'},
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        status: true,
        branchId: true,
        notes: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({code: 'not_found', message: 'User not found'}, {status: 404});
  }
}
