'use client';
import { useRouter } from 'next/navigation';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';

type CustomersTableProps = {
  data: { email: string; dni: string; name: string }[];
};

export default function CustomersTable({ data }: CustomersTableProps) {
  const router = useRouter();

  return (
    <Table>
      <TableHeader>
        <TableRow className='hover:bg-transparent'>
          <TableHead>Name</TableHead>
          <TableHead>DNI</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((customer) => (
          <TableRow
            key={customer.dni}
            className='cursor-pointer'
            onClick={() => router.push(`/customers/${customer.dni}`)}
          >
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.dni}</TableCell>
            <TableCell>{customer.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
