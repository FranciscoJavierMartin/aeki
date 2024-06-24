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
        <div className='text-center'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Due date
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const dueDate = new Date(row.original.dueDate);
      return <div className='text-center'>{dueDate.toLocaleDateString()}</div>;
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
  {
    accessorKey: 'discountAppliedPercentage',
    header: () => {
      return <div className='text-center'>Applied discount</div>;
    },
    cell: ({ row }) => {
      return (
        <div className='text-center'>
          {row.original.discountAppliedPercentage}%
        </div>
      );
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
      const totalPrice = parseFloat(row.getValue('totalPrice'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(totalPrice);

      return <div className='text-right font-medium'>{formatted}</div>;
    },
  },
];
