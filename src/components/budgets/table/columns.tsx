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
  {
    accessorKey: 'totalPrice',
    header: ({ column }) => {
      return (
        <div className='text-right'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Total price
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const price = parseFloat(row.getValue('totalPrice'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(price);

      return <div className='text-right'>{formatted}</div>;
    },
  },
];
