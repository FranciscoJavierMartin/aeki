import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/Table';

const customers = [
  {
    name: 'John Doe',
    dni: '12345678A',
    email: 'john@doe.com',
  },
  {
    name: 'Jane Doe',
    dni: '12345678B',
    email: 'john@doe.com',
  },
  {
    name: 'Isaac Clarke',
    dni: '12345678C',
    email: 'isaac@clarke.com',
  },
  {
    name: 'Agatha Christie',
    dni: '12345678D',
    email: 'agatha@christie.com',
  },
];

export default function CustomersPage() {
  return (
    <div>
      <h1>Customers</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>DNI</TableHead>
            <TableHead>Email</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.dni}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.dni}</TableCell>
              <TableCell>{customer.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
