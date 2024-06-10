import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(request: Request) {
  const products = await prismaClient.product.findMany({
    select: { id: true, name: true, photoURL: true, price: true },
  });
  return NextResponse.json({ products });
}
