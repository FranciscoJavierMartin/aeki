import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import ProductDetailsPage from '@/components/products/detail/product-details-page';
import { getQueryClient } from '@/lib/utils/get-query-client';
import { getProductOptions } from '@/components/products/options';

export default function ProductPage({ params }: { params: { id: string } }) {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(getProductOptions(params.id));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductDetailsPage id={params.id} />
    </HydrationBoundary>
  );
}
