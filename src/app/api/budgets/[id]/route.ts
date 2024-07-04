import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';
import addDays from '@/lib/utils/add-days';

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

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { productId } = await request.json();

  const budget = await prismaClient.budget.findUnique({
    where: { id: params.id },
    include: { products: true },
  });

  if (budget) {
    const newProductList = budget.products.filter(
      (p) => p.productId !== productId,
    );
    const newTotalPrice = newProductList.reduce(
      (acc, p) => p.quantity * p.pricePerUnit + acc,
      0,
    );

    // await prismaClient.budget.update({
    //   where: {
    //     id: params.id,
    //   },
    //   data: {
    //     dueDate: addDays(new Date(), 15),
    //     totalPrice: newTotalPrice,
    //   },
    // });

    // await prismaClient.productsOnBudgets.deleteMany({
    //   where: {
    //     productId,
    //     budgetId: params.id,
    //   },
    // });
  }

  return Response.json({ message: 'Success' });
}
