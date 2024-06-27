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
        <div className='flex flex-col items-center gap-5 p-5 max-md:w-full md:flex-row md:rounded-2xl md:bg-slate-100 dark:md:bg-slate-800'>
          <div className='flex size-40 items-center justify-center rounded-full text-8xl text-white'>
            <img src={data.photoURL} width={160} height={160} />
          </div>
          <div className='flex flex-col justify-center text-center md:text-start'>
            <h1 className='text-5xl'>
              {/* {data.firstName} {data.lastName} */}
              {data.name}
            </h1>
            <span
              // href={`mailto:${data.email}`}
              className='mb-2 text-right font-normal text-slate-500 dark:text-slate-100'
            >
              {price}
              {/* {data.email} */}
            </span>
            <button
              className='text-right font-normal text-slate-500 dark:text-slate-100'
              onClick={() => {
                navigator.clipboard.writeText(data.id);
                toast('Product ID copied to clipboard');
              }}
            >
              {data.id}
            </button>
            <div className='font-normal text-slate-500 dark:text-slate-100'>
              {/* {data.dni} */}
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
