import { ColumnDef } from '@tanstack/react-table';
import { ProductInBudget } from '@/types/customer';
import { Button } from '@/components/ui/button';
import SortedIcon from '@/components/ui/sorted-icon';

export const productColumns: ColumnDef<ProductInBudget>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Price
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: 'photoURL',
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Price
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
];
