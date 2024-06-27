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
        <div className='grid grid-cols-[3fr_2fr]'>
          <img src={data.photoURL} alt={data.name} className='rounded-2xl' />
          <div className='flex flex-col'>
            <h1 className='mb-5 mt-3 text-right text-5xl'>{data.name}</h1>
            <span className='mb-2 text-right text-3xl font-light'>{price}</span>
            <button className='text-right'>{data.id}</button>
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
