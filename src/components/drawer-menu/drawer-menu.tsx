import { PropsWithChildren } from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import NavLink from '@/components/drawer-menu/nav-link';

const navLinks = [
  {
    text: 'Customers',
    href: '/customers',
  },
  {
    text: 'Products',
    href: '/products',
  },
  {
    text: 'Budgets',
    href: '/budgets',
  },
  {
    text: 'Profile',
    href: '/profile',
  },
];

export default function Providers({ children }: PropsWithChildren) {
  console.log(window.location.pathname);
  return (
    <Sheet>
      {children}
      <SheetContent side='left' className='bg-slate-900 text-white'>
        <SheetHeader>
          <SheetTitle className='text-4xl text-white'>Aeki</SheetTitle>
        </SheetHeader>
        <div className='mt-5 flex flex-col gap-4 py-4 text-xl'>
          {navLinks.map((navLink) => (
            <NavLink
              key={navLink.href}
              href={navLink.href}
              className='rounded-lg py-2 pl-4 pr-3 hover:bg-slate-700'
              activeClass='bg-slate-700'
            >
              {navLink.text}
            </NavLink>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
