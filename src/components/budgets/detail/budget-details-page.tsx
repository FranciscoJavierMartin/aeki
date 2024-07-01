'use client';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getBudgetOptions } from '@/components/budgets/options';

export default function BudgetDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getBudgetOptions(id));

  return <pre>{JSON.stringify(data)}</pre>;
}
