import { Button } from '@/components/ui/button';
import SortedIcon from '@/components/ui/sorted-icon';
import { ColumnDef } from '@tanstack/react-table';

export const budgetColumns: ColumnDef<Budget>[] = [
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
];
