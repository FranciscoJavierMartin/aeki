import { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils';

type NavLinkProps = PropsWithChildren<
  LinkProps & { className?: string; activeClass?: string }
>;

export default function NavLink({
  children,
  className,
  activeClass,
  ...props
}: NavLinkProps) {
  const isActive = true;
  return (
    <Link
      {...props}
      className={cn(className || '', isActive ? activeClass : '')}
    >
      {children}
    </Link>
  );
}
