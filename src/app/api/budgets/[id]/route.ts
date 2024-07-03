import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const data = await prismaClient.budget.findUnique({
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

  const productsMapped =
    data?.products.map(({ Product, pricePerUnit, quantity }) => ({
      pricePerUnit,
      quantity,
      name: Product.name,
      productId: Product.id,
      photoURL: Product.photoURL,
      totalPrice: pricePerUnit * quantity,
    })) || [];

  return NextResponse.json({
    budget: {
      discountAppliedPercentage: data?.discountAppliedPercentage,
      dueDate: data?.dueDate,
      totalPrice: data?.totalPrice,
      id: data?.id,
    },
    products: productsMapped,
    customer: data?.Customer,
  });
}
