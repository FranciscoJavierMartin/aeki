import Header from '@/components/Header';
import { PropsWithChildren } from 'react';

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
