import CustomersTable from '@/components/customers/CustomersTable';

export default async function CustomersPage() {
  const { customers } = await fetch('http://localhost:4230/api/customers').then(
    (res) => res.json(),
  );

  return (
    <div>
      <h1>Customers</h1>
      <CustomersTable data={customers} />
    </div>
  );
}
