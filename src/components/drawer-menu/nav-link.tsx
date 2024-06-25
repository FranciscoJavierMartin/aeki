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
  let toPathname: string = props.href.toString() ?? '';
  let locationPathname: string = window.location.pathname;

  if (toPathname.startsWith('/')) {
    toPathname = toPathname.substring(1);
  }

  if (toPathname.endsWith('/')) {
    toPathname = toPathname.substring(0, toPathname.length - 1);
  }

  if (locationPathname.startsWith('/')) {
    locationPathname = locationPathname.substring(1);
  }

  if (locationPathname.endsWith('/')) {
    locationPathname = locationPathname.substring(
      0,
      locationPathname.length - 1,
    );
  }

  const isActive = locationPathname === toPathname;

  return (
    <Link
      {...props}
      className={cn(className || '', isActive ? activeClass : '')}
    >
      {children}
    </Link>
  );
}
