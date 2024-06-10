import { queryOptions } from '@tanstack/react-query';

async function getCustomers(): Promise<CustomerRow[]> {
  const { customers } = await fetch('http://localhost:4230/api/customers').then(
    (res) => res.json(),
  );

  return customers as CustomerRow[];
}

export const customersOptions = queryOptions({
  queryKey: ['customers'],
  queryFn: getCustomers,
});
