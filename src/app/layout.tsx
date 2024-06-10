import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
