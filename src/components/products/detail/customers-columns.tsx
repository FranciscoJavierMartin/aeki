import { ColumnDef } from '@tanstack/react-table';

export const customerColumns: ColumnDef<Customer>[] = [
  {
    accessorKey: 'email',
    header: () => {
      return <div className='text-center'>Email</div>;
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
    header: () => {
      return <div className='text-center'>Phone</div>;
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
    header: () => {
      return <div className='text-center'>DNI</div>;
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
    header: () => {
      return <div className='text-center'>First name</div>;
    },
  },
  {
    accessorKey: 'lastName',
    header: () => {
      return <div className='text-center'>Last name</div>;
    },
  },
];
