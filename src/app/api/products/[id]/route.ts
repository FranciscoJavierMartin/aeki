import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  let product: Product = {} as Product;
  let customers: Customer[] = [];
  let budgets: any[]=[]
  const data = await prismaClient.product.findUnique({
    where: { id: params.id },
    include: {
      budgets: {
        select: {
          Budget: { include: { Customer: true } },
        },
      },
    },
  });

  if (data) {
    product = {
      id: data.id,
      name: data.name,
      photoURL: data.photoURL,
      price: data.price,
    };

    customers = Array.from(
      data.budgets.reduce(
        (acc, b) => acc.add(b.Budget.Customer),
        new Set<Customer>(),
      ),
    );

    budgets = Array.from(
      data.budgets.reduce(
        (acc, b) => acc.add(b.Budget.Customer),
        new Set<Customer>(),
      ),
    );
  }

  return NextResponse.json({ product, customers });
}
