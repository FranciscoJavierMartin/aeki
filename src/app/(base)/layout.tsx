import Header from '@/components/Header';
import { PropsWithChildren } from 'react';

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
