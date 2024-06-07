import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/Table';

type Customer =
  | ({
      budgets: {
        id: string;
        totalPrice: number;
        discountAppliedPercentage: number;
        dueDate: Date;
        customerId: string;
      }[];
    } & {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
      phone: string;
      dni: string;
    })
  | null;

export default async function CustomerPage({
  params,
}: {
  params: { id: string };
}) {
  const { customer } = await fetch(
    `http://localhost:4230/api/customers/${params.id}`,
  ).then((res) => res.json());

  console.log(customer);

  return (
    <div>
      <h1 className='text-2xl'>{customer.name}</h1>
      <div className='grid w-full grid-cols-2 gap-2'>
        <div>
          <h3>Products</h3>
          <Table>
            <TableHeader>
              <TableRow className='hover:bg-transparent'>
                <TableHead>Product</TableHead>
                <TableHead>Color</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>White</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div>
          <h3>Budgets</h3>
          <Table>
            <TableHeader>
              <TableRow className='hover:bg-transparent'>
                <TableHead>Product</TableHead>
                <TableHead>Color</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>White</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
