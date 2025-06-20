import './globals.css';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, hasLocale } from 'next-intl';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { routing } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'VG.dev – Web Developer Portfolio',
  description:
    'Personal portfolio website of VG.dev – frontend web developer showcasing projects, skills and contact info.',
  icons: {
    icon: '/favicon.svg',
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
