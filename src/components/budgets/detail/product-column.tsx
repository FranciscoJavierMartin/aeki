import { ColumnDef } from '@tanstack/react-table';
import type { Product } from '@/types/budget';

export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: 'quantity',
  },
];
