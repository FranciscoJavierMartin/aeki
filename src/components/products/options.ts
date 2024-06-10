import { queryOptions } from '@tanstack/react-query';

async function getProducts(): Promise<ProductRow[]> {
  const { products } = await fetch('http://localhost:4230/api/products').then(
    (res) => res.json(),
  );

  return products as ProductRow[];
}

export const productsOptions = queryOptions({
  queryKey: ['products'],
  queryFn: getProducts,
});
