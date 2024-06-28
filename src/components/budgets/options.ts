import { BudgetRow } from '@/types/budget';
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
