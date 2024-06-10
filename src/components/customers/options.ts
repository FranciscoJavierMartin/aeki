import type { Customer, CustomerRow } from '@/types/customer';
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

async function getCustomer(id: string) {
  const { customer } = await fetch(
    `http://localhost:4230/api/customers/${id}`,
  ).then((res) => res.json());

  return customer as Customer;
}

export function getCustomerOptions(id: string) {
  return queryOptions({
    queryKey: [`customer_${id}`],
    queryFn: async () => await getCustomer(id),
  });
}
