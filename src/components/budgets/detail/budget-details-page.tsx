import { useSuspenseQuery } from '@tanstack/react-query';
import { getBudgetOptions } from '../options';

export default function BudgetDetailsPage({ id }: { id: string }) {
  const { data } = useSuspenseQuery(getBudgetOptions(id));

  return <div></div>;
}
