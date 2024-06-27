import { HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { productsOptions } from '@/components/products/options';
import ProductsTable from '@/components/products/table/products-table';
import { getQueryClient } from '@/lib/utils/get-query-client';

export default function ProductsPage() {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(productsOptions);

  return (
    <div>
      <div className='container mx-auto py-10'>
        <h1 className='mb-5 text-center text-4xl'>Products</h1>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductsTable />
        </HydrationBoundary>
      </div>
    </div>
  );
}
