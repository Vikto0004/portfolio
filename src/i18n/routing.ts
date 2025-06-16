import { defineRouting } from 'next-intl/routing';

export const defaultLang = 'en' as const;
export const langs = ['en', 'pl', 'uk'] as const;
export type LangType = (typeof langs)[number];

export const routing = defineRouting({
  locales: langs,

  // Used when no locale matches
  defaultLocale: defaultLang,
});
