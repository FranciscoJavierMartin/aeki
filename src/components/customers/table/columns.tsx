'use client';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<CustomerRow>[] = [
  {
    accessorKey: 'dni',
    header: 'DNI',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
];
