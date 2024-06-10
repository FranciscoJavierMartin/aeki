import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/sonner';
import Providers from '@/providers/providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aeki',
  description:
    'Furniture, home accessories, design ideas and inspiration for big dreams and small budgets. A better everyday life begins at home!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
