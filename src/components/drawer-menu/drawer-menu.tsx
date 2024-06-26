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
import ThemeSwitch from '@/components/theme-switch';

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
      <SheetContent
        side='left'
        className='bg-slate-50 dark:bg-slate-900 dark:text-white'
      >
        <SheetHeader>
          <SheetTitle className='text-4xl'>
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
                activeClass='dark:bg-slate-700 bg-slate-200'
              >
                {navLink.text}
              </NavLink>
            </SheetClose>
          ))}
          <ThemeSwitch />
        </div>
      </SheetContent>
    </Sheet>
  );
}
