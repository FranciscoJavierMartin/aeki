import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const customers = await prisma.customer.findMany({
    select: {
      dni: true,
      email: true,
      firstName: true,
      lastName: true,
    },
  });
  return NextResponse.json({ customers });
}
