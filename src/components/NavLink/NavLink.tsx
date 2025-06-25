'use client';

import clsx from 'clsx';

import css from './NavLink.module.css';
import { Link, usePathname } from '@/i18n/navigation';
import { ReactNode } from 'react';

type PropsType = {
  href: string;
  children: ReactNode;
  className?: string;
  classNameIsActive?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function NavLink({
  href,
  className,
  classNameIsActive,
  onClick,
  children,
}: PropsType) {
  const pathName = usePathname();

  return (
    <Link
      onClick={onClick}
      href={href}
      className={clsx(
        css.link,
        className && className,
        (pathName === href && classNameIsActive) || (pathName === href && css.active)
      )}
    >
      {children}
    </Link>
  );
}
