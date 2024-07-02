'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getBudgetOptions } from '@/components/budgets/options';
import { DataTable } from '@/components/ui/data-table';
import { productColumns } from '@/components/budgets/detail/product-column';

export default function BudgetDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getBudgetOptions(id));

  return (
    <div>
      <div className='mb-10 grid w-full grid-cols-1 gap-5 px-3 md:grid-cols-2'>
        {data.products?.length ?? 'no products'}
        {/* <DataTable data={data.products} columns={productColumns} /> */}
      </div>
    </div>
  );
}
