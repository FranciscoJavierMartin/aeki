'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getCustomerOptions } from '@/components/customers/options';
import { DataTable } from '@/components/ui/data-table';
import {
  productColumns,
  type CustomerProductItem,
} from '@/components/customers/detail/product-columns';
import {
  budgetColumns,
  type BudgetWithAmount,
} from '@/components/customers/detail/budget-columns';

export default function CustomerDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getCustomerOptions(id));

  const products: CustomerProductItem[] = data.budgets.reduce<
    CustomerProductItem[]
  >((acc, b) => {
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

  const budgets: BudgetWithAmount[] = data.budgets.map((budget) => ({
    ...budget,
    amount: budget.products.length,
  }));

  return (
    <div className='flex w-full flex-col gap-10 md:p-3'>
      <div className='flex w-full justify-center md:my-10'>
        <div className='flex flex-col items-center gap-5 p-5 max-md:w-full md:flex-row md:rounded-2xl md:bg-slate-100'>
          <div className='flex size-40 items-center justify-center rounded-full bg-slate-900 text-8xl text-white'>
            <span>
              {`${data.firstName.charAt(0)}${data.lastName.charAt(0)}`}
            </span>
          </div>
          <div className='flex flex-col justify-center text-center md:text-start'>
            <h1 className='text-5xl'>
              {data.firstName} {data.lastName}
            </h1>
            <a
              href={`mailto:${data.email}`}
              className='mb-2 font-normal text-slate-500'
            >
              {data.email}
            </a>
            <a
              href={`tel:${data.phone}`}
              className='font-normal text-slate-500'
            >
              {data.phone}
            </a>
            <div className='font-normal text-slate-500'>{data.dni}</div>
          </div>
        </div>
      </div>
      <div className='mb-10 grid w-full grid-cols-1 gap-5 px-3 md:grid-cols-2'>
        <DataTable data={products} columns={productColumns} />
        <DataTable data={budgets} columns={budgetColumns} />
      </div>
    </div>
  );
}
