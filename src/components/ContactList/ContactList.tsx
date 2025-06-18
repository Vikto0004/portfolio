import Link from 'next/link';
import { CiLinkedin } from 'react-icons/ci';
import { FaGithub } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';

import css from './ContactList.module.css';

export default function ContactList() {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>
        <div className={css.itemWrap}>
          <CiLinkedin />
        </div>
        <div className={css.itemContent}>
          <h3 className="subtitle">LinkedIn:</h3>
          <Link href="https://www.linkedin.com/in/viktor-hedz/" className="link" target="_blank">
            https://www.linkedin.com/in/viktor-hedz/
          </Link>
        </div>
      </li>
      <li className={css.listItem}>
        <div className={css.itemWrap}>
          <FaGithub />
        </div>
        <div className={css.itemContent}>
          <h3 className="subtitle">GitHub:</h3>
          <Link href="https://github.com/Vikto0004" className="link" target="_blank">
            https://github.com/Vikto0004
          </Link>
        </div>
      </li>
      <li className={css.listItem}>
        <div className={css.itemWrap}>
          <GoMail />
        </div>
        <div className={css.itemContent}>
          <h3 className="subtitle">Email:</h3>
          <Link href="mailto:vikto0004@gmail.com" className="link">
            vikto0004@gmail.com
          </Link>
        </div>
      </li>
    </ul>
  );
}
