import './globals.css';

import {headers} from 'next/headers';
import {Space_Grotesk} from 'next/font/google';

import {defaultLocale, locales} from '@/i18n/locales';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Web AI',
  description: 'Next.js web starter',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({children}: RootLayoutProps) {
  const headerLocale = headers().get('x-next-intl-locale');
  const locale = locales.includes(headerLocale as typeof locales[number])
    ? (headerLocale as typeof locales[number])
    : defaultLocale;

  return (
    <html lang={locale}>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
