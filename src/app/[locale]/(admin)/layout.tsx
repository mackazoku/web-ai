import {headers} from 'next/headers';
import {notFound, redirect} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {getServerSession} from 'next-auth';

import ReactQueryProvider from '@/providers/react-query-provider';
import {locales} from '@/i18n/locales';
import {authOptions} from '@/modules/admin/auth/auth-options';

type AdminLayoutProps = {
  children: React.ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default async function AdminLayout({children, params}: AdminLayoutProps) {
  const {locale} = params;

  if (!locales.includes(locale as typeof locales[number])) {
    notFound();
  }

  const requestHeaders = headers();
  const pathname = requestHeaders.get('x-pathname') ?? '';

  if (pathname.endsWith('/admin/login')) {
    const messages = await getMessages();

    return (
      <NextIntlClientProvider messages={messages}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </NextIntlClientProvider>
    );
  }

  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  const status = session?.user?.status;
  const allowedRoles = new Set(['admin', 'receptionist', 'staff']);
  const isAllowed = !!role && status === 'active' && allowedRoles.has(role);

  if (!isAllowed) {
    const host =
      requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host');
    const proto = requestHeaders.get('x-forwarded-proto') ?? 'https';
    const loginPath = `/${locale}/admin/login?callbackUrl=/${locale}/admin`;
    const origin = host ? `${proto}://${host}` : '';

    redirect(origin ? `${origin}${loginPath}` : loginPath);
  }

  if (role !== 'admin' && pathname.includes('/admin/') && !pathname.endsWith('/admin')) {
    const host =
      requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host');
    const proto = requestHeaders.get('x-forwarded-proto') ?? 'https';
    const origin = host ? `${proto}://${host}` : '';
    const dashboardPath = `/${locale}/admin`;
    redirect(origin ? `${origin}${dashboardPath}` : dashboardPath);
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <ReactQueryProvider>{children}</ReactQueryProvider>
    </NextIntlClientProvider>
  );
}
