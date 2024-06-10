'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { columns } from '@/components/products/table/columns';
import { DataTable } from '@/components/ui/data-table';
import { productsOptions } from '@/components/products/options';

export default function ProductsTable() {
  const { data } = useSuspenseQuery(productsOptions);

  return <DataTable columns={columns} data={data} />;
}
