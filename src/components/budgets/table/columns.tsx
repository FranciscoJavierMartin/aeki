import { ColumnDef } from '@tanstack/react-table';
import { BudgetRow } from '@/types/budget';
import { Button } from '@/components/ui/button';
import SortedIcon from '@/components/ui/sorted-icon';

export const columns: ColumnDef<BudgetRow>[] = [
  {
    accessorKey: 'dueDate',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Due date
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: 'discountAppliedPercentage',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Applied discount
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
    cell: ({ row }) => {
      const discount = parseFloat(row.getValue('discountAppliedPercentage'));

      return <span>{discount}%</span>;
    },
  },
];
