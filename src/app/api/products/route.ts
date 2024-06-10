import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(request: Request) {
  const products = await prismaClient.product.findMany({});
  return NextResponse.json({ products });
}
