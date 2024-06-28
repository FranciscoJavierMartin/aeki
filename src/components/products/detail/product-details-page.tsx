'use client';
import { useMemo } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getProductOptions } from '@/components/products/options';
import { budgetColumns } from '@/components/products/detail/budget-columns';
import { customerColumns } from '@/components/products/detail/customers-columns';
import { DataTable } from '@/components/ui/data-table';

export default function ProductDetailsPage({ id }: { id: string }) {
  const {
    data: { product, customers, budgets },
  } = useSuspenseQuery(getProductOptions(id));

  const price = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(product.price),
    [product.price],
  );

  return (
    <div className='flex w-full flex-col gap-10 md:p-3'>
      <div className='flex w-full justify-center md:my-10'>
        <div className='flex flex-col gap-x-7 p-5 md:flex-row'>
          <img
            src={product.photoURL}
            alt={product.name}
            className='w-full rounded-2xl md:w-3/5'
          />
          <div className='flex w-full flex-col md:w-2/5'>
            <h1 className='mb-5 mt-3 text-5xl md:text-right'>{product.name}</h1>
            <span className='mb-2 text-right text-3xl font-light'>{price}</span>
            <button
              className='mt-5 text-center md:mt-0 md:text-right'
              onClick={() => {
                navigator.clipboard.writeText(product.id);
                toast('Product ID copied to clipboard');
              }}
            >
              {product.id}
            </button>
            <div className='mt-12 grid w-full grid-cols-2 gap-2'>
              <span className='font-semibold'>Total purchases</span>
              <span className='text-right'>{product.amountOfPurchases}</span>
              <span className='font-semibold'>Different customers</span>
              <span className='text-right'>{customers.length}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-10 grid w-full grid-cols-1 gap-5 px-3 md:grid-cols-2'>
        <DataTable data={budgets} columns={budgetColumns} />
        <DataTable data={customers} columns={customerColumns} />
      </div>
      <div className='space-y-10' />
    </div>
  );
}
