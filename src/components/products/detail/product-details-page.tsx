'use client';
import { useMemo } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { getProductOptions } from '@/components/products/options';

export default function ProductDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getProductOptions(id));

  console.log(data);

  const price = useMemo(
    () =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(+data.price),
    [data.price],
  );

  return (
    <div className='flex w-full flex-col gap-10 md:p-3'>
      <div className='flex w-full justify-center md:my-10'>
        <div className='flex flex-col gap-x-7 p-5 md:flex-row'>
          <img
            src={data.photoURL}
            alt={data.name}
            className='w-full rounded-2xl md:w-3/5'
          />
          <div className='flex w-full flex-col md:w-2/5'>
            <h1 className='mb-5 mt-3 text-5xl md:text-right'>{data.name}</h1>
            <span className='mb-2 text-right text-3xl font-light'>{price}</span>
            <button
              className='md:mt-0 text-center mt-5 md:text-right'
              onClick={() => {
                navigator.clipboard.writeText(data.id);
                toast('Product ID copied to clipboard');
              }}
            >
              {data.id}
            </button>
            <div className='mt-12 grid w-full grid-cols-2 gap-2'>
              <span className='font-semibold'>Total purchases</span>
              <span className='text-right'>12</span>
              <span className='font-semibold'>Different customers</span>
              <span className='text-right'>40</span>
            </div>
          </div>
        </div>
      </div>
      <div className='mb-10 grid w-full grid-cols-1 gap-5 px-3 md:grid-cols-2'>
        {/* <DataTable data={products} columns={productColumns} /> */}
        {/* <DataTable data={budgets} columns={budgetColumns} /> */}
      </div>
    </div>
  );
}
