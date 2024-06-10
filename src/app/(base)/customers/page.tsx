import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { customersOptions } from '@/components/customers/options';
import CustomersTable from '@/components/customers/table/customers-table';
import { getQueryClient } from '@/lib/utils/get-query-client';

export default function CustomersPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(customersOptions);

  return (
    <div>
      <h1>Customers</h1>
      <div className='container mx-auto py-10'>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <CustomersTable />
        </HydrationBoundary>
      </div>
    </div>
  );
}
