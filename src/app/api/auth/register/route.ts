import {NextResponse} from 'next/server';
import {z} from 'zod';
import bcrypt from 'bcryptjs';

import {prisma} from '@/modules/shared/db/prisma';

const registrationSchema = z.object({
  email: z.string().trim().email(),
  password: z.string().trim().min(1),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = registrationSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {code: 'invalid_payload', message: 'Invalid registration payload.'},
      {status: 400},
    );
  }

  const {email, password} = parsed.data;
  const existing = await prisma.user.findUnique({
    where: {email},
    select: {id: true},
  });

  if (existing) {
    return NextResponse.json(
      {code: 'email_exists', message: 'Email already exists.'},
      {status: 409},
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const nameFromEmail = email.split('@')[0] || 'Customer';

  const user = await prisma.user.create({
    data: {
      email,
      name: nameFromEmail,
      passwordHash,
      role: 'customer',
      status: 'active',
      authProvider: 'credentials',
    },
    select: {
      id: true,
      email: true,
    },
  });

  return NextResponse.json(user, {status: 201});
}
