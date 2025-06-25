'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useNoScroll } from '@/utils/hooks/no-scroll';
import { AiOutlineClose } from 'react-icons/ai';
import { CiMenuBurger } from 'react-icons/ci';

import Logo from '@/components/Logo/Logo';
import { Link } from '@/i18n/navigation';

import SelectLang from '../SelectLang/SelectLang';

import css from './Header.module.css';
import NavLink from '../NavLink/NavLink';

export default function Header() {
  const t = useTranslations('Header');
  const [toggleMenu, setToggleMenu] = useState(false);
  useNoScroll(toggleMenu);

  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <Link className={css.logo} href="/">
          <Logo />
          VG.dev
        </Link>
        <ul className={css.navList}>
          <li>
            <NavLink href="/">{t('home')}</NavLink>
          </li>
          <li>
            <NavLink href="/projects">{t('projects')}</NavLink>
          </li>
        </ul>
        <SelectLang />
        <Link className={clsx(css.navListLink, 'primary-btn')} href="/contact">
          {t('contact')}
        </Link>
      </nav>
      <button
        className={css.burger}
        onClick={() => setToggleMenu(!toggleMenu)}
        aria-label="Open menu"
      >
        <CiMenuBurger />
      </button>
      <div className={clsx(css.mobileMenu, toggleMenu && css.mobileMenuActive)}>
        <div className={css.mobileMenuHeader}>
          <Link className={css.logo} href="/">
            <Logo />
            VG.dev
          </Link>
          <button
            className={css.closeBtn}
            onClick={() => setToggleMenu(!toggleMenu)}
            aria-label="Close menu"
          >
            <AiOutlineClose />
          </button>
        </div>
        <nav className={css.mobileNav}>
          <ul className={css.mobileNavList}>
            <li>
              <NavLink onClick={() => setToggleMenu(!toggleMenu)} href="/">
                {t('home')}
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => setToggleMenu(!toggleMenu)} href="/projects">
                {t('projects')}
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link
          onClick={() => setToggleMenu(!toggleMenu)}
          className={clsx(css.link, 'primary-btn')}
          href="/contact"
        >
          {t('contact')}
        </Link>
      </div>
    </header>
  );
}
