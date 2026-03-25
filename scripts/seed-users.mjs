import bcrypt from 'bcryptjs';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const defaultPassword = process.env.SEED_DEFAULT_PASSWORD ?? 'Spa@1234';

const users = [
  {name: 'Mai Nguyen', email: 'mai.nguyen@example.com', role: 'admin', status: 'active'},
  {name: 'Quang Tran', email: 'quang.tran@example.com', role: 'receptionist', status: 'active'},
  {name: 'Linh Pham', email: 'linh.pham@example.com', role: 'staff', status: 'active'},
  {name: 'Anh Le', email: 'anh.le@example.com', role: 'staff', status: 'active'},
  {name: 'Bao Vu', email: 'bao.vu@example.com', role: 'staff', status: 'active'},
  {name: 'Han Do', email: 'han.do@example.com', role: 'receptionist', status: 'active'},
  {name: 'Nhi Cao', email: 'nhi.cao@example.com', role: 'staff', status: 'active'},
  {name: 'Minh Truong', email: 'minh.truong@example.com', role: 'staff', status: 'active'},
  {name: 'Duy Hoang', email: 'duy.hoang@example.com', role: 'staff', status: 'active'},
  {name: 'Trang Vo', email: 'trang.vo@example.com', role: 'staff', status: 'disabled'},
];

const run = async () => {
  const passwordHash = await bcrypt.hash(defaultPassword, 10);

  for (const user of users) {
    await prisma.user.upsert({
      where: {email: user.email},
      update: {
        name: user.name,
        role: user.role,
        status: user.status,
        passwordHash,
      },
      create: {
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        passwordHash,
      },
    });
  }
};

run()
  .then(async () => {
    await prisma.$disconnect();
    console.log('Seeded sample users.');
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
