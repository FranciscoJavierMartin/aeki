import { columns } from '@/components/customers/table/columns';
import { DataTable } from '@/components/customers/table/data-table';

async function getData() {
  const { customers } = await fetch('http://localhost:4230/api/customers').then(
    (res) => res.json(),
  );

  return customers as CustomerRow[];
}

export default async function CustomersPage() {
  const customers = await getData();

  return (
    <div>
      <h1>Customers</h1>
      <div className='container mx-auto py-10'>
        <DataTable columns={columns} data={customers} />
      </div>
    </div>
  );
}
