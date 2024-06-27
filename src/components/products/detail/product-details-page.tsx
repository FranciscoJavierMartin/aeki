'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getProductOptions } from '@/components/products/options';

export default function ProductDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getProductOptions(id));

  console.log(data);

  return <div></div>;
}
