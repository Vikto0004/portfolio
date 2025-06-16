import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const acceptLang = request.headers.get('accept-language');
  const userLang = acceptLang?.split(',')[0].split('-')[0] || 'en';

  const supportedLocales = ['en', 'pl', 'uk'];
  const pathname = request.nextUrl.pathname;

  if (pathname === '/') {
    const localeToUse = supportedLocales.includes(userLang) ? userLang : 'en';
    return NextResponse.redirect(new URL(`/${localeToUse}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(en|pl|uk)/:path*'],
};
