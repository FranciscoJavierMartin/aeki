import type { BudgetRow, BudgetResponse } from '@/types/budget';
import { queryOptions } from '@tanstack/react-query';

async function getBudgets(): Promise<BudgetRow[]> {
  const { budgets } = await fetch('http://localhost:4230/api/budgets').then(
    (res) => res.json(),
  );

  return budgets as BudgetRow[];
}

export const budgetsOptions = queryOptions({
  queryKey: ['budgets'],
  queryFn: getBudgets,
});

async function getBudget(id: string): Promise<BudgetResponse> {
  const data = await fetch(`http://localhost:4230/api/budgets/${id}`).then(
    (res) => res.json(),
  );

  return data as BudgetResponse;
}

export function getBudgetOptions(id: string) {
  return queryOptions({
    queryKey: [`budget_${id}`],
    queryFn: async () => await getBudget(id),
  });
}
