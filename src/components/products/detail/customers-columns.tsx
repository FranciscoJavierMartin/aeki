import { Button } from '@/components/ui/button';
import SortedIcon from '@/components/ui/sorted-icon';
import { ColumnDef } from '@tanstack/react-table';

export const customerColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <div className='text-center'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Email
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='text-center'>
          <a href={`mailto:${row.original.email}`}>{row.original.email}</a>
        </div>
      );
    },
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => {
      return (
        <div className='text-center'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Phone
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='text-center'>
          <a href={`tel:${row.original.phone}`}>{row.original.phone}</a>
        </div>
      );
    },
  },
  {
    accessorKey: 'dni',
    header: ({ column }) => {
      return (
        <div className='text-center'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            DNI
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='text-center'>
          <span>{row.original.dni}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'firstName',
    header: ({ column }) => {
      return (
        <div className='text-center'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            First name
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: 'lastName',
    header: ({ column }) => {
      return (
        <div className='text-center'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Last name
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
  },
];
