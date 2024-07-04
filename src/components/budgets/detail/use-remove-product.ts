import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

async function removeProductServer(
  budgetId: string,
  productId: string,
): Promise<void> {
  await fetch(`http://localhost:4230/api/budgets/${budgetId}`, {
    method: 'DELETE',
    body: JSON.stringify({ productId }),
  });
}

export default function useRemoveProduct() {
  const mutation = useMutation({
    mutationFn: async (data: { budgetId: string; productId: string }) => {
      await removeProductServer(data.budgetId, data.productId);
    },
    onError: () => {
      toast('Error removing product from budget');
    },
    onSuccess: () => {
      toast('Removed product from budget');
    },
  });

  function removeProduct(budgetId: string, productId: string) {
    mutation.mutate({ budgetId, productId });
  }

  return {
    removeProduct,
  };
}
