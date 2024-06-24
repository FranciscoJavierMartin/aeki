'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getCustomerOptions } from '@/components/customers/options';
import { DataTable } from '../../ui/data-table';
import { Product } from '@/types/customer';

export default function CustomerDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getCustomerOptions(id));
  // const products = Array.from(
  //   data.budgets.reduce<Set<Product>>((acc, budget) => {
  //     budget.products.forEach((p) => {
  //       acc.add(p);
  //     });
  //     return acc;
  //   }, new Set<Product>()),
  // );

  const products: Product[] = Array.from(
    data.budgets.reduce<Set<Product>>((acc, b) => {
      b.products.forEach((p) => acc.add(p));
      return acc;
    }, new Set<Product>()),
  );

  console.log(products);

  return (
    <div>
      <h1>
        Customer {data.firstName} {data.lastName}
      </h1>
      <div className='grid grid-cols-2'>
        {/* <DataTable data={products} /> */}
      </div>
    </div>
  );
}
