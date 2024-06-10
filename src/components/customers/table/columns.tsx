'use client';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<CustomerRow>[] = [
  {
    accessorKey: 'dni',
    header: 'DNI',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];
