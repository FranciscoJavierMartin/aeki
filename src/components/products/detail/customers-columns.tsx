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
];
