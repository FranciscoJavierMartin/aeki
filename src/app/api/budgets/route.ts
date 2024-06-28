import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(request: Request) {
  const budgets = await prismaClient.budget.findMany({
    // select: { dni: true, email: true, firstName: true, lastName: true },
  });

  return NextResponse.json({ budgets });
}
