import {NextResponse} from 'next/server';
import bcrypt from 'bcryptjs';
import {Role, UserStatus} from '@prisma/client';

import {requireAdmin} from '@/modules/admin/auth/require-admin';
import {prisma} from '@/modules/shared/db/prisma';

const parseQuery = (request: Request) => {
  const url = new URL(request.url);
  return {
    role: url.searchParams.get('role'),
    status: url.searchParams.get('status'),
    branchId: url.searchParams.get('branchId'),
    q: url.searchParams.get('q'),
  };
};

const toRole = (value: string | null) =>
  value && Object.values(Role).includes(value as Role) ? (value as Role) : undefined;

const toStatus = (value: string | null) =>
  value && Object.values(UserStatus).includes(value as UserStatus)
    ? (value as UserStatus)
    : undefined;

export async function GET(request: Request) {
  const session = await requireAdmin();

  if (!session) {
    return NextResponse.json({code: 'forbidden', message: 'Forbidden'}, {status: 403});
  }

  const {role, status, branchId, q} = parseQuery(request);
  const roleFilter = toRole(role);
  const statusFilter = toStatus(status);

  const users = await prisma.user.findMany({
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
    where: {
      role: roleFilter,
      status: statusFilter,
      branchId: branchId ?? undefined,
      OR: q
        ? [
            {name: {contains: q, mode: 'insensitive'}},
            {email: {contains: q, mode: 'insensitive'}},
          ]
        : undefined,
    },
    orderBy: {createdAt: 'desc'},
  });

  return NextResponse.json(users);
}

export async function POST(request: Request) {
  const session = await requireAdmin();

  if (!session) {
    return NextResponse.json({code: 'forbidden', message: 'Forbidden'}, {status: 403});
  }

  const body = await request.json();
  const {name, email, password, role, status, phone, branchId, notes} = body ?? {};
  const parsedRole = toRole(role ?? null);
  const parsedStatus = toStatus(status ?? null) ?? UserStatus.active;

  if (!name || !email || !password || !parsedRole) {
    return NextResponse.json(
      {code: 'invalid_request', message: 'Missing required fields'},
      {status: 400},
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone: phone ?? null,
        role: parsedRole,
        status: parsedStatus,
        passwordHash,
        branchId: branchId ?? null,
        notes: notes ?? null,
      },
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

    return NextResponse.json(user, {status: 201});
  } catch (error) {
    return NextResponse.json(
      {code: 'conflict', message: 'User already exists'},
      {status: 409},
    );
  }
}
