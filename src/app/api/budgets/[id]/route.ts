import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const budget = await prismaClient.budget.findUnique({
    where: { id: params.id },
  });

  return NextResponse.json({ budget });
}
