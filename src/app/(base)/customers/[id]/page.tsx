import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import CustomerDetailsPage from '@/components/customers/detail/customer-details-page';
import { getCustomerOptions } from '@/components/customers/options';
import { getQueryClient } from '@/lib/utils/get-query-client';

export default function CustomerPage({ params }: { params: { id: string } }) {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getCustomerOptions(params.id));

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <CustomerDetailsPage id={params.id} />
      </HydrationBoundary>
    </div>
  );
}
