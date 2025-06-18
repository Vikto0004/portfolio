'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CiMenuBurger } from 'react-icons/ci';

import Logo from '@/components/Logo/Logo';
import { Link } from '@/i18n/navigation';
import { useNoScroll } from '@/utils/hooks/no-scroll';

import SelectLang from '../SelectLang/SelectLang';

import css from './Header.module.css';

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
            <Link href="/">{t('home')}</Link>
          </li>
          <li>
            <Link href="/projects">{t('projects')}</Link>
          </li>
        </ul>
        <SelectLang />
        <Link className={clsx(css.navListLink, 'primary-btn')} href="/contact">
          {t('contact')}
        </Link>
      </nav>
      <button className={css.burger} onClick={() => setToggleMenu(!toggleMenu)}>
        <CiMenuBurger />
      </button>
      <div className={clsx(css.mobileMenu, toggleMenu && css.mobileMenuActive)}>
        <div className={css.mobileMenuHeader}>
          <Link className={css.logo} href="/">
            <Logo />
            VG.dev
          </Link>
          <button className={css.closeBtn} onClick={() => setToggleMenu(!toggleMenu)}>
            <AiOutlineClose />
          </button>
        </div>
        <nav className={css.mobileNav}>
          <ul className={css.mobileNavList}>
            <li>
              <Link onClick={() => setToggleMenu(!toggleMenu)} href="/">
                {t('home')}
              </Link>
            </li>
            <li>
              <Link onClick={() => setToggleMenu(!toggleMenu)} href="/projects">
                {t('projects')}
              </Link>
            </li>
          </ul>
        </nav>
        <Link onClick={() => setToggleMenu(!toggleMenu)} className="primary-btn" href="/contact">
          {t('contact')}
        </Link>
      </div>
    </header>
  );
}
