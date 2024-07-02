'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getBudgetOptions } from '@/components/budgets/options';
import { DataTable } from '@/components/ui/data-table';
import { productColumns } from '@/components/budgets/detail/product-column';

export default function BudgetDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getBudgetOptions(id));

  return (
    <div>
      <div className='flex w-full gap-x-5'>
        <section className='grid w-1/2 grid-cols-[2fr_4fr] gap-x-4 gap-y-3 rounded-3xl bg-slate-100 p-5 dark:bg-slate-800'>
          <span className='font-semibold'>ID</span>
          <span className='text-right'>{data.budget.id}</span>
          <span className='font-semibold'>Due date</span>
          <span className='text-right'>
            {new Date(data.budget.dueDate).toLocaleDateString()}
          </span>
          <span className='font-semibold'>Total price</span>
          <span className='text-right'>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(data.budget.totalPrice)}
          </span>
          <span className='font-semibold'>Total price</span>
          <span className='text-right'>
            {data.budget.discountAppliedPercentage}%
          </span>
        </section>
      </div>
      <pre>{JSON.stringify({ ...data.customer }, null, 2)}</pre>
      <div className='mb-30 w-full px-3'>
        <DataTable data={data.products} columns={productColumns} />
      </div>
    </div>
  );
}
