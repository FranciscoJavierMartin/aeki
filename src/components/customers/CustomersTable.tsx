import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/Table';

type CustomersTableProps = {
  data: { email: string; dni: string; name: string }[];
};

export default function CustomersTable({ data }: CustomersTableProps) {
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
          <TableRow key={customer.dni}>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.dni}</TableCell>
            <TableCell>{customer.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
