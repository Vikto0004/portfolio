import { useTranslations } from 'next-intl';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

import { Link } from '@/i18n/navigation';

import Logo from '../Logo/Logo';

import css from './Footer.module.css';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className={css.footer}>
      <div className="container">
        <nav className={css.footerNav}>
          <Link className={css.logo} href="/">
            <Logo />
            VG.dev
          </Link>
          <div className={css.navContainer}>
            <h3 className={css.subtitle}>{t('menu.title')}</h3>
            <ul className={css.navList}>
              <li>
                <Link className={css.link} href="/">
                  {t('menu.home')}
                </Link>
              </li>
              <li>
                <Link className={css.link} href="/projects">
                  {t('menu.projects')}
                </Link>
              </li>
              <li>
                <Link className={css.link} href="/contact">
                  {t('menu.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div className={css.navContainer}>
            <h3 className={css.subtitle}>{t('services.title')}</h3>
            <ul className={css.navList}>
              <li>
                <Link className={css.link} href="/cookie-policy">
                  {t('services.cookiPolicy')}
                </Link>
              </li>
              <li>
                <Link className={css.link} href="/privacy-policy">
                  {t('services.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link className={css.link} href="/terms-of-use">
                  {t('services.termsOfUse')}
                </Link>
              </li>
            </ul>
          </div>
          <div className={css.navContainer}>
            <h3 className={css.subtitle}>{t('social.title')}</h3>
            <ul className={css.navList}>
              <li className={css.navListItem}>
                <CiLinkedin />
                <Link
                  href="https://www.linkedin.com/in/viktor-hedz/"
                  className={css.link}
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li className={css.navListItem}>
                <FaGithub />
                <Link href="https://github.com/Vikto0004" className={css.link} target="_blank">
                  GitHub
                </Link>
              </li>
              <li className={css.navListItem}>
                <GoMail />
                <Link href="mailto:vikto0004@gmail.com" className={css.link}>
                  vikto0004@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <p className={css.footerRights}>
          © {new Date().getFullYear()} {t('rights')}
        </p>
      </div>
    </footer>
  );
}
