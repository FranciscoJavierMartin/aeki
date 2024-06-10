import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import ProductsTable from '@/components/products/table/products-table';
import { productsOptions } from '@/components/products/options';
import { getQueryClient } from '@/lib/utils/get-query-client';

export default function ProductsPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(productsOptions);

  return (
    <div>
      <h1>Products</h1>
      <div className='container mx-auto py-10'>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductsTable />
        </HydrationBoundary>
      </div>
    </div>
  );
}
