import Link from 'next/link';

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
    <header className='flex w-full justify-between bg-slate-900'>
      <button className='inline-block size-14 p-3 md:hidden'>
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
      </button>
      <span className='p-3 text-4xl text-white'>Aeki</span>
      <nav className='flex justify-end text-right text-2xl transition-all duration-300 ease-in'>
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
