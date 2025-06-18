import clsx from 'clsx';
import { useTranslations } from 'next-intl';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';

import css from './Contact.module.css';

export default function Contact() {
  const t = useTranslations('Contact');

  return (
    <section className={css.contact}>
      <div className="container container-flex">
        <div className={clsx(css.content, 'content-center')}>
          <p className="section-name center">{t('sectionName')}</p>
          <h2 className="title">{t('title')}</h2>
        </div>
        <div className={css.wrapper}>
          <p className={clsx(css.descr, 'descr')}>{t('description')}</p>
          <ContactList />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
