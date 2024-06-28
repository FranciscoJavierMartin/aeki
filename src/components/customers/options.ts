import type { Customer, CustomerRow } from '@/types/customer';
import { queryOptions } from '@tanstack/react-query';
import { BudgetWithAmount } from '@/components/customers/detail/budget-columns';
import { CustomerProductItem } from '@/components/customers/detail/product-columns';

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
  const data = await fetch(`http://localhost:4230/api/customers/${id}`).then(
    (res) => res.json(),
  );

  return data as {
    customer: Customer;
    budgets: BudgetWithAmount[];
    products: CustomerProductItem[];
  };
}

export function getCustomerOptions(id: string) {
  return queryOptions({
    queryKey: [`customer_${id}`],
    queryFn: async () => await getCustomer(id),
  });
}
