'use client';
import { PropsWithChildren } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from '@/lib/utils/get-query-client';
import DrawerMenu from '@/components/drawer-menu/drawer-menu';

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DrawerMenu>{children}</DrawerMenu>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
