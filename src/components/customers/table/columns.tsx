'use client';
import Link from 'next/link';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons';
import { ColumnDef, FilterFn, Row, SortDirection } from '@tanstack/react-table';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Checkbox } from '@/components/ui/checkbox';

const filterByCustomer: FilterFn<CustomerRow> = (
  row: Row<CustomerRow>,
  columnId: string,
  filterValue: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addMeta: (meta: any) => void,
) => {
  const filterParts = filterValue.toLowerCase().split(' ');
  const rowValues =
    `${row.original.dni} ${row.original.email} ${row.original.firstName} ${row.original.lastName}`.toLowerCase();

  return filterParts.every((part) => rowValues.includes(part));
};

function SortedIcon({ isSorted }: { isSorted: false | SortDirection }) {
  return isSorted === 'asc' ? (
    <ChevronUpIcon className='size-4' />
  ) : isSorted === 'desc' ? (
    <ChevronDownIcon className='size-4' />
  ) : null;
}

export const columns: ColumnDef<CustomerRow>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'dni',
    filterFn: filterByCustomer,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          DNI
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: 'lastName',
    filterFn: filterByCustomer,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Last Name
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: 'firstName',
    filterFn: filterByCustomer,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          First Name
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    accessorKey: 'email',
    filterFn: filterByCustomer,
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Email
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const customer = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <DotsHorizontalIcon className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(customer.dni);
                toast('DNI copied to clipboard');
              }}
            >
              Copy customer DNI
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={`/customers/${customer.dni}`}>View customer</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
