import { Button } from '@/components/ui/button';
import SortedIcon from '@/components/ui/sorted-icon';
import { Budget } from '@/types/customer';
import { ColumnDef } from '@tanstack/react-table';

export type BudgetWithAmount = Omit<Budget, 'product'> & { amount: number };

export const budgetColumns: ColumnDef<BudgetWithAmount>[] = [
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
    cell: ({ row }) => {
      const dueDate = new Date(row.original.dueDate);
      return <div className='text-right'>{dueDate.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <div className='text-center'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Amount
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return <div className='text-center'>{row.original.amount}</div>;
    },
  },
];
