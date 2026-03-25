import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const branches = [
  {
    name: 'Downtown Atelier',
    address: '12 Ly Tu Trong, District 1, HCMC',
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Riverside Retreat',
    address: '88 Vo Nguyen Giap, Thu Duc, HCMC',
    timezone: 'Asia/Ho_Chi_Minh',
  },
  {
    name: 'Garden House',
    address: '45 Nguyen Trai, District 5, HCMC',
    timezone: 'Asia/Ho_Chi_Minh',
  },
];

const services = [
  {
    name: 'Botanical Glow Facial',
    description: 'Organic facial ritual for radiant skin.',
    durationMinutes: 60,
    priceCents: 14500,
    category: 'Facial',
  },
  {
    name: 'Deep Tissue Restoration',
    description: 'Targeted massage to release deep tension.',
    durationMinutes: 90,
    priceCents: 18500,
    category: 'Massage',
  },
  {
    name: 'Restorative Body Wrap',
    description: 'Mineral wrap to reset and hydrate.',
    durationMinutes: 75,
    priceCents: 16500,
    category: 'Body',
  },
];

const getOrCreateBranch = async (branch) => {
  const existing = await prisma.branch.findFirst({where: {name: branch.name}});
  if (existing) return existing;
  return prisma.branch.create({data: branch});
};

const getOrCreateService = async (service, branchId) => {
  const existing = await prisma.service.findFirst({
    where: {name: service.name, branchId},
  });
  if (existing) return existing;
  return prisma.service.create({
    data: {
      ...service,
      branchId,
    },
  });
};

const run = async () => {
  const branchRecords = [];
  for (const branch of branches) {
    const record = await getOrCreateBranch(branch);
    branchRecords.push(record);
  }

  const serviceRecords = [];
  for (const branch of branchRecords) {
    for (const service of services) {
      const record = await getOrCreateService(service, branch.id);
      serviceRecords.push(record);
    }
  }

  const staff = await prisma.user.findMany({
    where: {role: 'staff'},
  });

  for (const [index, member] of staff.entries()) {
    const fallbackBranch = branchRecords[index % branchRecords.length];
    const targetBranchId = member.branchId ?? fallbackBranch?.id ?? null;
    if (!targetBranchId) continue;

    if (member.branchId !== targetBranchId) {
      await prisma.user.update({
        where: {id: member.id},
        data: {branchId: targetBranchId},
      });
    }

    const branchServices = serviceRecords.filter(
      (service) => service.branchId === targetBranchId,
    );

    for (const service of branchServices) {
      await prisma.staffService.upsert({
        where: {
          staffId_serviceId: {
            staffId: member.id,
            serviceId: service.id,
          },
        },
        update: {},
        create: {
          staffId: member.id,
          serviceId: service.id,
        },
      });
    }
  }

  for (const branch of branchRecords) {
    const bookingCount = await prisma.booking.count({where: {branchId: branch.id}});
    if (bookingCount >= 2) {
      continue;
    }

    const staffMember =
      staff.find((member) => member.branchId === branch.id) ?? staff[0] ?? null;

    const now = new Date();
    const firstStart = new Date(now);
    firstStart.setDate(now.getDate() + 2);
    firstStart.setHours(10, 0, 0, 0);

    const secondStart = new Date(now);
    secondStart.setDate(now.getDate() + 3);
    secondStart.setHours(14, 30, 0, 0);

    const bookingsPayload = [
      {
        customerName: 'Mai Nguyen',
        customerEmail: 'mai.nguyen@example.com',
        customerPhone: '+84 912 345 678',
        startAt: firstStart,
        endAt: new Date(firstStart.getTime() + 60 * 60 * 1000),
        status: 'confirmed',
        source: 'public',
      },
      {
        customerName: 'Quang Tran',
        customerEmail: 'quang.tran@example.com',
        customerPhone: '+84 901 222 333',
        startAt: secondStart,
        endAt: new Date(secondStart.getTime() + 90 * 60 * 1000),
        status: 'pending',
        source: 'public',
      },
    ];

    for (const bookingPayload of bookingsPayload) {
      const booking = await prisma.booking.create({
        data: {
          ...bookingPayload,
          branchId: branch.id,
          staffId: staffMember?.id ?? null,
        },
      });

      const branchServices = serviceRecords.filter(
        (service) => service.branchId === branch.id,
      );
      const targetService = branchServices[0] ?? serviceRecords[0];
      if (targetService) {
        await prisma.bookingService.create({
          data: {
            bookingId: booking.id,
            serviceId: targetService.id,
          },
        });
      }
    }
  }
};

run()
  .then(async () => {
    await prisma.$disconnect();
    console.log('Seeded core branches, services, and bookings.');
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
