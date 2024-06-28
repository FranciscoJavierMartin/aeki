import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/utils/get-query-client';
import { budgetsOptions } from '@/components/budgets/options';

export default function BudgetsPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(budgetsOptions);

  return (
    <div>
      <div className='container mx-auto py-10'>
        <h1 className='mb-5 text-center text-4xl'>Budgets</h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          {/* <CustomersTable /> */}
          <div>Hello</div>
        </HydrationBoundary>
      </div>
    </div>
  );
}
