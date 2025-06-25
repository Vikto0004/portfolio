'use client';

import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import * as Yup from 'yup';

import { useNoScroll } from '@/utils/hooks/no-scroll';

import Loader from '../Loader/Loader';
import css from './ContactForm.module.css';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const t = useTranslations('ContactForm');
  const [isOpen, setIsOpen] = useState(false);
  useNoScroll(isOpen);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t('validation.name.min'))
      .matches(/^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s]+$/, t('validation.name.invalid'))
      .required(t('validation.name.required')),
    email: Yup.string()
      .email(t('validation.email.invalid'))
      .required(t('validation.email.required')),
    message: Yup.string()
      .min(10, t('validation.message.min'))
      .required(t('validation.message.required')),
  });

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues> & {
      setStatus: () => void;
    }
  ) => {
    const { resetForm, setSubmitting, setStatus } = formikHelpers;

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error('Помилка при відправці листа');

      resetForm();
      setStatus({ success: true });
      setIsOpen(true);
    } catch (error: any) {
      setStatus({ success: false, message: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ status, isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label className={css.label} htmlFor="name">
              {t('labels.name')}
            </label>
            <Field className={css.input} type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" className={css.formError} />
          </div>

          <div className={css.formGroup}>
            <label className={css.label} htmlFor="email">
              {t('labels.email')}
            </label>
            <Field className={css.input} type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className={css.formError} />
          </div>

          <div className={css.formGroup}>
            <label className={css.label} htmlFor="message">
              {t('labels.message')}
            </label>
            <Field className={css.input} as="textarea" id="message" name="message" rows={5} />
            <ErrorMessage name="message" component="div" className={css.formError} />
          </div>

          <button type="submit" className="primary-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Відправка...' : t('buttonText')}
          </button>

          {isSubmitting && <Loader />}

          {status?.success && isOpen && (
            <div className={css.overlay} onClick={() => setIsOpen(false)}>
              <div className={css.success} onClick={(e) => e.stopPropagation()}>
                <h3 className="subtitle">{t('modal.success')}</h3>
                <button className="primary-btn" onClick={() => setIsOpen(false)}>
                  {t('modal.close')}
                </button>
              </div>
            </div>
          )}

          {status?.success === false && isOpen && (
            <div className={css.overlay} onClick={() => setIsOpen(false)}>
              <div className={css.error} onClick={(e) => e.stopPropagation()}>
                <h3 className="subtitle">
                  {t('modal.error')} <br />
                  {status.message}
                </h3>
                <button className="primary-btn" onClick={() => setIsOpen(false)}>
                  {t('modal.close')}
                </button>
              </div>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
}
