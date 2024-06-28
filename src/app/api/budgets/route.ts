import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(request: Request) {
  const budgets = (
    await prismaClient.budget.findMany({
      include: {
        Customer: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    })
  ).map(({ Customer, ...budget }) => ({
    ...budget,
    customerName: `${Customer.lastName}, ${Customer.firstName}`,
  }));

  return NextResponse.json({ budgets });
}
