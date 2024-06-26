'use client';
import { PropsWithChildren, useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { getQueryClient } from '@/lib/utils/get-query-client';
import DrawerMenu from '@/components/drawer-menu/drawer-menu';

export default function Providers({ children }: PropsWithChildren) {
  const queryClient = getQueryClient();

  function setTheme(theme: string): void {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }

  function onLoad(): void {
    const themeSwitch = document.getElementById('theme-checkbox');

    if (themeSwitch) {
      (themeSwitch as HTMLInputElement).checked =
        localStorage.getItem('theme') === 'dark' ? true : false;
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      setTheme(theme);
    } else {
      setTheme('light');
    }

    onLoad();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <DrawerMenu>{children}</DrawerMenu>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
