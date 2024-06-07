import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  // const customer = await prismaClient.customer.find({
  //   where: { dni: params.id },
  // });

  return NextResponse.json({ customer: null });
}
