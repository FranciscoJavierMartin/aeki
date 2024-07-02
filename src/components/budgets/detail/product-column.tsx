import { ColumnDef } from '@tanstack/react-table';
import type { Product } from '@/types/budget';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

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
  },
  {
    accessorKey: 'quantity',
  },
  {
    accessorKey: 'pricePerUnit',
  },
];
