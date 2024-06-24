'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getCustomerOptions } from '@/components/customers/options';
import { DataTable } from '@/components/ui/data-table';
import { productColumns } from '@/components/customers/detail/product-columns';
import { ProductInBudget } from '@/types/customer';

export default function CustomerDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getCustomerOptions(id));

  const products: ProductInBudget[] = Array.from(
    data.budgets.reduce<Set<ProductInBudget>>((acc, b) => {
      b.products.forEach((p) => acc.add(p.Product));
      return acc;
    }, new Set<ProductInBudget>()),
  );

  console.log(products);

  return (
    <div>
      <h1>
        Customer {data.firstName} {data.lastName}
      </h1>
      <div className='grid grid-cols-2'>
        <DataTable data={products} columns={productColumns} />
      </div>
    </div>
  );
}
