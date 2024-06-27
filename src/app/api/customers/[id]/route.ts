import { NextResponse } from 'next/server';
import { prismaClient } from '@/lib/utils/prisma-client';
import { BudgetWithAmount } from '@/components/customers/detail/budget-columns';
import { CustomerProductItem } from '@/components/customers/detail/product-columns';

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  let products: CustomerProductItem[] = [];
  let budgets: BudgetWithAmount[] = [];
  let customer: Customer = {} as Customer;

  const data = await prismaClient.customer.findUnique({
    where: { dni: params.id },
    include: {
      budgets: {
        include: {
          products: {
            select: {
              Product: true,
              budgetId: true,
              pricePerUnit: true,
              quantity: true,
            },
          },
        },
      },
    },
  });

  if (data) {
    customer = {
      dni: data.dni,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      id: data.id,
      phone: data.phone,
    };

    products = data.budgets.reduce<CustomerProductItem[]>((acc, b) => {
      b.products.forEach((product) => {
        const index = acc.findIndex((p) => p.id === product.Product.id);

        if (index > -1) {
          acc[index].quantity += product.quantity;
        } else {
          acc.push({ ...product.Product, quantity: product.quantity });
        }
      });

      return acc;
    }, []);

    budgets = data.budgets.map(({ dueDate, ...budget }) => ({
      ...budget,
      dueDate: dueDate.toDateString(),
      amount: budget.products.length,
    }));
  }

  return NextResponse.json({ customer, budgets, products });
}
