import { ColumnDef } from '@tanstack/react-table';
import { ProductInBudget } from '@/types/customer';

export const columns: ColumnDef<ProductInBudget>[] = [
  {
    accessorKey: 'name',
    header: 'Hello',
  },
];
