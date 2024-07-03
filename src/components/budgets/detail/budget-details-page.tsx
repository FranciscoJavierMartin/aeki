'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getBudgetOptions } from '@/components/budgets/options';
import { DataTable } from '@/components/ui/data-table';
import { productColumns } from '@/components/budgets/detail/product-column';

export default function BudgetDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getBudgetOptions(id));

  return (
    <div>
      <div className='mb-16 mt-10 flex w-full justify-center gap-x-5'>
        {data.budget && (
          <section className='grid w-full grid-cols-[2fr_4fr] gap-x-4 gap-y-3 rounded-3xl bg-slate-100 p-5 dark:bg-slate-800 md:w-1/2'>
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
            <span className='font-semibold'>Applied discount</span>
            <span className='text-right'>
              {data.budget.discountAppliedPercentage}%
            </span>
            <hr className='col-span-2 my-5 border border-b border-slate-500' />
            {data.customer && (
              <>
                <span className='font-semibold'>Customer</span>
                <span className='text-right'>{`${data.customer.lastName}, ${data.customer.firstName}`}</span>
                <span className='font-semibold'>Email</span>
                <a
                  href={`mailto:${data.customer.email}`}
                  className='text-right'
                >
                  {data.customer.email}
                </a>
                <span className='font-semibold'>Phone</span>
                <a href={`tel:${data.customer.phone}`} className='text-right'>
                  {data.customer.phone}
                </a>
              </>
            )}
          </section>
        )}
      </div>
      {data.products?.length && (
        <div className='mb-30 w-full px-3'>
          <DataTable data={data.products} columns={productColumns} />
        </div>
      )}
    </div>
  );
}
