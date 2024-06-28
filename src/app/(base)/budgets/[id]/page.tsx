import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/utils/get-query-client';
import BudgetDetailsPage from '@/components/budgets/detail/budget-details-page';
import { getBudgetOptions } from '@/components/budgets/options';

export default function BudgetPage({ params }: { params: { id: string } }) {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getBudgetOptions(params.id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BudgetDetailsPage id={params.id} />
    </HydrationBoundary>
  );
}
