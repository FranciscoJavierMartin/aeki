import { ColumnDef } from '@tanstack/react-table';
import type { Product } from '@/types/budget';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import SortedIcon from '@/components/ui/sorted-icon';

export const productColumns: ColumnDef<Product>[] = [
  {
    accessorKey: 'photoURL',
    header: '',
    size: 30,
    maxSize: 30,
    minSize: 30,
    cell: ({ row }) => {
      return (
        <Avatar>
          <AvatarImage src={row.original.photoURL} />
        </Avatar>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Name
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: 'quantity',
    header: ({ column }) => {
      return (
        <div className='text-right'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Quantity
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const quantity = parseFloat(row.getValue('quantity'));
      return <div className='text-center md:text-right'>{quantity}</div>;
    },
  },
  {
    accessorKey: 'pricePerUnit',
    header: ({ column }) => {
      return (
        <div className='text-right'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Price per unit
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('pricePerUnit'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className='text-right'>{formatted}</div>;
    },
  },
];
