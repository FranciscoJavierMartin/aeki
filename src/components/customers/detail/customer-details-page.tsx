'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getCustomerOptions } from '@/components/customers/options';
import { DataTable } from '@/components/ui/data-table';
import {
  productColumns,
  type CustomerProductItem,
} from '@/components/customers/detail/product-columns';

export default function CustomerDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getCustomerOptions(id));

  const products: CustomerProductItem[] = data.budgets.reduce<
    CustomerProductItem[]
  >((acc, b) => {
    b.products.forEach((product) => {
      const index = acc.findIndex((p) => p.id === product.Product.id);

      if (index > -1) {
        acc[index].quantity += product.quantity;
      } else {
        acc.push({ ...product.Product, quantity: product.quantity });
      }
    });

    return acc;
  }, []);

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
