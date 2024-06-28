'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getCustomerOptions } from '@/components/customers/options';
import { DataTable } from '@/components/ui/data-table';
import { productColumns } from '@/components/customers/detail/product-columns';
import { budgetColumns } from '@/components/customers/detail/budget-columns';

export default function CustomerDetailsPage({ id }: { id: string }) {
  const {
    data: { customer, budgets, products },
  } = useSuspenseQuery(getCustomerOptions(id));

  console.log({ customer, budgets, products });

  return (
    <div className='flex w-full flex-col gap-10 md:p-3'>
      <div className='flex w-full justify-center md:my-10'>
        <div className='flex flex-col items-center gap-5 p-5 max-md:w-full md:flex-row md:rounded-2xl md:bg-slate-100 dark:md:bg-slate-800'>
          <div className='flex size-40 items-center justify-center rounded-full bg-slate-900 text-8xl text-white dark:bg-slate-700'>
            <span>
              {`${customer.firstName.charAt(0)}${customer.lastName.charAt(0)}`}
            </span>
          </div>
          <div className='flex flex-col justify-center text-center md:text-start'>
            <h1 className='text-5xl'>
              {customer.firstName} {customer.lastName}
            </h1>
            <a
              href={`mailto:${customer.email}`}
              className='mb-2 font-normal text-slate-500 dark:text-slate-100'
            >
              {customer.email}
            </a>
            <a
              href={`tel:${customer.phone}`}
              className='font-normal text-slate-500 dark:text-slate-100'
            >
              {customer.phone}
            </a>
            <div className='font-normal text-slate-500 dark:text-slate-100'>
              {customer.dni}
            </div>
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
