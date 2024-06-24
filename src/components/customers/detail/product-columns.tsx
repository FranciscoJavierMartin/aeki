import { ColumnDef } from '@tanstack/react-table';
import { ProductInBudget } from '@/types/customer';
import { Button } from '@/components/ui/button';
import SortedIcon from '@/components/ui/sorted-icon';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

export type CustomerProductItem = ProductInBudget & { quantity: number };

export const productColumns: ColumnDef<CustomerProductItem>[] = [
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
      return <div className='text-right'>{quantity}</div>;
    },
  },
  {
    accessorKey: 'price',
    header: ({ column }) => {
      return (
        <div className='text-right'>
          <Button
            variant='ghost'
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Price
            <SortedIcon isSorted={column.getIsSorted()} />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('price'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className='text-right'>{formatted}</div>;
    },
  },
];
