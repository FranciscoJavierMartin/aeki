import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const customer = await prismaClient.customer.findUnique({
    where: { dni: params.id },
    include: {
      budgets: {
        include: {
          products: true,
        },
      },
    },
  });
  return NextResponse.json({ customer });
}
