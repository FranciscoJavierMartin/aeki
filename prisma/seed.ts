import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import { PASSWORD_SALT } from '../src/lib/utils/constants';

const prisma = new PrismaClient();

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
          dni: Math.floor(Math.random() * 100_000_000)
            .toString()
            .padStart(8, '0'),
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

async function seed() {
  await purgeData();
  await seedUsers();
  await seedCustomers();
  await seedProducts();
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
