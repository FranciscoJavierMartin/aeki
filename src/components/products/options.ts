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

async function getProduct(id: string) {
  const { product } = await fetch(
    `http://localhost:4230/api/products/${id}`,
  ).then((res) => res.json());

  return product as Product;
}

export function getProductOptions(id: string) {
  return queryOptions({
    queryKey: [`product_${id}`],
    queryFn: async () => await getProduct(id),
  });
}
