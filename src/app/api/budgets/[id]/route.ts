import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const {
    products = [],
    Customer,
    ...budget
  } = await prismaClient.budget.findUnique({
    where: { id: params.id },
    include: {
      Customer: true,
      products: {
        include: {
          Product: true,
        },
      },
    },
  });

  return NextResponse.json({ budget, products, customer: Customer });
}
