import { PropsWithChildren } from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetClose,
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
  return (
    <Sheet>
      {children}
      <SheetContent side='left' className='bg-slate-900 text-white'>
        <SheetHeader>
          <SheetTitle className='text-4xl text-white'>
            <SheetClose asChild>
              <Link href='/'>Aeki</Link>
            </SheetClose>
          </SheetTitle>
        </SheetHeader>
        <div className='mt-5 flex flex-col gap-4 py-4 text-xl'>
          {navLinks.map((navLink) => (
            <SheetClose asChild key={navLink.href}>
              <NavLink
                href={navLink.href}
                className='rounded-lg py-2 pl-4 pr-3 hover:bg-slate-700'
                activeClass='bg-slate-700'
              >
                {navLink.text}
              </NavLink>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
