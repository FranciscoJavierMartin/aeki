import Link from 'next/link';
import { SheetTrigger } from './ui/sheet';
import { Button } from './ui/button';

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

export default function Header() {
  return (
    <header className='flex w-full flex-row-reverse items-center justify-between bg-slate-900 md:flex-row'>
      <SheetTrigger asChild className='md:hidden'>
        <Button variant='ghost'>
          <span className='sr-only'>Open menu</span>
          <svg
            className='size-7 text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 17 14'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M1 1h15M1 7h15M1 13h15'
            ></path>
          </svg>
        </Button>
      </SheetTrigger>
      <span className='p-3 text-4xl text-white'>Aeki</span>
      <nav className='hidden justify-end text-right text-2xl transition-all duration-300 ease-in md:flex'>
        {navLinks.map((navLink) => (
          <Link
            href={navLink.href}
            key={navLink.href}
            className='p-3 text-white hover:bg-black hover:bg-opacity-30'
          >
            {navLink.text}
          </Link>
        ))}
      </nav>
    </header>
  );
}
