import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  let product: Product = {} as Product;
  let customers: Customer[] = [];
  let budgets: Budget[] = [];

  const data = await prismaClient.product.findUnique({
    where: { id: params.id },
    include: {
      budgets: {
        select: {
          Budget: {
            include: {
              Customer: true,
              products: { include: { Product: true } },
            },
          },
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
      amountOfPurchases: data.budgets.reduce<number>((acc, b) => {
        return (
          acc +
          (b.Budget.products.find((p) => p.productId === data.id)?.quantity ||
            0)
        );
      }, 0),
    };

    customers = Array.from(
      data.budgets.reduce(
        (acc, b) => acc.add(b.Budget.Customer),
        new Set<Customer>(),
      ),
    );

    budgets = Array.from(
      data.budgets.reduce(
        (acc, { Budget }) =>
          acc.add({
            discountAppliedPercentage: Budget.discountAppliedPercentage,
            dueDate: Budget.dueDate,
            totalPrice: Budget.totalPrice,
          }),
        new Set<Budget>(),
      ),
    );
  }

  return NextResponse.json({ product, customers, budgets });
}
