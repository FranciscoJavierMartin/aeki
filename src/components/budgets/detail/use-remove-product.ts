'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { BudgetResponse } from '@/types/budget';
import { getQueryClient } from '@/lib/utils/get-query-client';

async function removeProductServer(
  budgetId: string,
  productId: string,
): Promise<void> {
  try {
    console.log('Hello');
    await fetch(`http://localhost:4230/api/budgets/${budgetId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
      cache: 'no-cache',
      body: JSON.stringify({ productId }),
    });
  } catch (error) {
    console.log(error);
    throw Error(JSON.stringify(error));
  }
}

export default function useRemoveProduct() {
  const queryClient = getQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: { budgetId: string; productId: string }) =>
      await removeProductServer(data.budgetId, data.productId),
    onMutate: async (data) => {
      await queryClient.cancelQueries({
        queryKey: [`budget_${data.budgetId}`],
      });

      const previousBudget = queryClient.getQueryData([
        `budget_${data.budgetId}`,
      ]);

      queryClient.setQueryData<BudgetResponse>(
        [`budget_${data.budgetId}`],
        (old) =>
          old
            ? {
                ...old,
                products: old.products.filter(
                  (p) => p.productId !== data.productId,
                ),
              }
            : old,
      );

      return {
        previousBudget,
      };
    },
    onError: (error, data, context) => {
      console.log('onError');
      queryClient.setQueryData(
        [`budget_${data.budgetId}`],
        context?.previousBudget,
      );
      toast('Error removing product from budget');
    },
    onSettled: (data, error, variables) => {
      console.log('onSettled', data, error);
      queryClient.invalidateQueries({
        queryKey: [`budget_${variables.budgetId}`],
      });
    },
  });

  function removeProduct(budgetId: string, productId: string) {
    mutation.mutate({ budgetId, productId });
  }

  return {
    removeProduct,
  };
}
