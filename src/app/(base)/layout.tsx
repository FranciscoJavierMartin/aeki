import Header from '@/components/Header';
import { PropsWithChildren } from 'react';

export default function BaseLayout({ children }: PropsWithChildren) {
  console.log('Hello');
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}
