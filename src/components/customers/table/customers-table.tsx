'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { columns } from '@/components/customers/table/columns';
import { DataTable } from '@/components/ui/data-table';
import { customersOptions } from '@/components/customers/options';

export default function CustomersTable() {
  const { data } = useSuspenseQuery(customersOptions);

  return <DataTable columns={columns} data={data} />;
}
