import bcrypt from 'bcryptjs';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const email = process.env.ADMIN_SEED_EMAIL;
const password = process.env.ADMIN_SEED_PASSWORD;
const name = process.env.ADMIN_SEED_NAME ?? 'Admin';

if (!email || !password) {
  console.error('Missing ADMIN_SEED_EMAIL or ADMIN_SEED_PASSWORD');
  process.exit(1);
}

const run = async () => {
  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.user.upsert({
    where: {email},
    update: {
      name,
      passwordHash,
      role: 'admin',
      status: 'active',
    },
    create: {
      name,
      email,
      passwordHash,
      role: 'admin',
      status: 'active',
    },
  });
};

run()
  .then(async () => {
    await prisma.$disconnect();
    console.log('Admin user seeded.');
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
