import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { PASSWORD_SALT } from '../src/lib/utils/constants';

const prisma = new PrismaClient();
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();

async function purgeData(): Promise<void> {
  console.info('Purge db start');
  await prisma.user.deleteMany();
  await prisma.budget.deleteMany();
  await prisma.productsOnBudgets.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.product.deleteMany();
  console.info('Purge db finished');
}

async function seedUsers(): Promise<void> {
  console.info('Creating users');

  await Promise.all([
    prisma.user.create({
      data: {
        email: 'test@test.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '1-730-717-3666 x23442',
        username: 'johndoe',
        photoURL: faker.image.avatar(),
        role: 'ADMIN',
        password: await bcrypt.hash('password', PASSWORD_SALT),
      },
    }),
    prisma.user.create({
      data: {
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phone: faker.phone.number(),
        username: faker.internet.userName(),
        photoURL: faker.image.avatar(),
        role: 'ADMIN',
        password: await bcrypt.hash('password', PASSWORD_SALT),
      },
    }),
    prisma.user.create({
      data: {
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phone: faker.phone.number(),
        username: faker.internet.userName(),
        photoURL: faker.image.avatar(),
        role: 'CONSULTANT',
        password: await bcrypt.hash('password', PASSWORD_SALT),
      },
    }),
    prisma.user.create({
      data: {
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phone: faker.phone.number(),
        username: faker.internet.userName(),
        photoURL: faker.image.avatar(),
        role: 'REVIEWER',
        password: await bcrypt.hash('password', PASSWORD_SALT),
      },
    }),
  ]);

  console.info('Creating users finished');
}

async function seedCustomers(): Promise<void> {
  console.info('Creating customers');

  await Promise.all(
    new Array(5).fill(1).map(() =>
      prisma.customer.create({
        data: {
          dni:
            Math.floor(Math.random() * 100_000_000)
              .toString()
              .padStart(8, '0') +
            alphabet[Math.floor(Math.random() * alphabet.length)],
          email: faker.internet.email(),
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          phone: faker.phone.number(),
        },
      }),
    ),
  );

  console.info('Creating customers finished');
}

async function seedProducts(): Promise<void> {
  console.info('Creating products');

  await Promise.all(
    new Array(15).fill(1).map(() =>
      prisma.product.create({
        data: {
          name: faker.commerce.productName(),
          price: +faker.commerce.price({ min: 20, max: 1000, dec: 2 }),
          photoURL: faker.image.urlPicsumPhotos(),
        },
      }),
    ),
  );

  console.info('Creating products finished');
}

async function seedBudget(customer: {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  dni: string;
}): Promise<void> {
  console.info(
    `Creating budget for customer ${customer.firstName} ${customer.lastName}`,
  );

  const skipProducts = Math.floor(
    (Math.random() * (await prisma.customer.count())) / 2,
  );
  const products = await prisma.product.findMany({
    take: 3,
    skip: skipProducts,
  });

  const budget = await prisma.budget.create({
    data: {
      customerId: customer.id,
    },
  });

  const productsOnBudgets = products.map((p) => ({
    budgetId: budget.id,
    productId: p.id,
    quantity: 1 + Math.round(Math.random() * 5),
    pricePerUnit: p.price,
  }));

  const totalPrice = productsOnBudgets.reduce<number>(
    (acc, p) => p.pricePerUnit * p.quantity + acc,
    0,
  );
  const totalAmountProducts = productsOnBudgets.reduce<number>(
    (acc, p) => p.quantity + acc,
    0,
  );
  const totalDiscount =
    totalAmountProducts < 7 ? 5 : totalAmountProducts < 11 ? 10 : 15;

  await Promise.all(
    productsOnBudgets.map(
      async (p) =>
        await prisma.productsOnBudgets.create({
          data: { ...p },
        }),
    ),
  );

  await prisma.budget.update({
    data: {
      discountAppliedPercentage: totalDiscount,
      totalPrice: totalPrice,
    },
    where: {
      id: budget.id,
    },
  });

  console.info(
    `Creating budget finished for customer ${customer.firstName} ${customer.lastName}`,
  );
}

async function seedBudgets(): Promise<void> {
  const customers = await prisma.customer.findMany();

  customers.forEach(async (customer) => {
    if (Math.random() < 0.7) {
      const times = Math.floor(Math.random() * 5);

      for (let i = 0; i < times; i++) {
        await seedBudget(customer);
      }
    } else {
      console.info(
        `Skipping budgets for customer ${customer.firstName} ${customer.lastName}`,
      );
    }
  });
}

async function seed() {
  await purgeData();
  await seedUsers();
  await seedCustomers();
  await seedProducts();
  await seedBudgets();
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
