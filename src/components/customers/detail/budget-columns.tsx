import { Button } from '@/components/ui/button';
import SortedIcon from '@/components/ui/sorted-icon';
import { Budget } from '@/types/customer';
import { ColumnDef } from '@tanstack/react-table';

export const budgetColumns: ColumnDef<Budget>[] = [
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
];
