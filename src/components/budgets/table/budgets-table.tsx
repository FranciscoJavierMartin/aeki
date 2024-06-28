'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { DataTable } from '@/components/ui/data-table';
import { budgetsOptions } from '@/components/budgets/options';
import { columns } from '@/components/budgets/table/columns';

export default function BudgetsTable() {
  const { data } = useSuspenseQuery(budgetsOptions);

  return (
    <DataTable
      columns={columns}
      data={data}
      inputPlaceholder='Filter by email, first name, last name, dni...'
    />
  );
}
