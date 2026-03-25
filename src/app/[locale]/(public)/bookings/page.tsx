import Link from 'next/link';
import {Playfair_Display} from 'next/font/google';
import {cookies, headers} from 'next/headers';
import {redirect} from 'next/navigation';
import {getLocale, getTranslations} from 'next-intl/server';
import {getServerSession} from 'next-auth';

import {authOptions} from '@/modules/admin/auth/auth-options';

type BookingItem = {
  id: string;
  status: string;
  startAt: string;
  endAt: string;
  branchName: string;
  staffName: string | null;
  services: Array<{
    id: string;
    name: string;
    durationMinutes: number;
    category: string | null;
  }>;
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const getBaseUrl = () => {
  const requestHeaders = headers();
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host');
  const proto = requestHeaders.get('x-forwarded-proto') ?? 'https';
  return host ? `${proto}://${host}` : '';
};

export default async function BookingsPage() {
  const t = await getTranslations('CustomerProfile');
  const locale = await getLocale();

  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user || user.role !== 'customer' || user.status !== 'active') {
    redirect(`/${locale}/login?callbackUrl=/${locale}/bookings`);
  }

  const cookieHeader = cookies().toString();
  const baseUrl = getBaseUrl();
  const apiUrl = baseUrl ? `${baseUrl}/api/bookings/my` : '/api/bookings/my';

  let bookings: BookingItem[] = [];
  let loadError = false;

  try {
    const response = await fetch(apiUrl, {
      cache: 'no-store',
      headers: cookieHeader ? {cookie: cookieHeader} : undefined,
    });

    if (!response.ok) {
      loadError = true;
    } else {
      const payload = await response.json();
      bookings = Array.isArray(payload?.items) ? payload.items : [];
    }
  } catch {
    loadError = true;
  }

  const now = new Date();
  const formatDate = new Intl.DateTimeFormat(locale, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  const formatTime = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  });

  const upcoming = bookings.filter((booking) => new Date(booking.startAt) >= now);
  const past = bookings.filter((booking) => new Date(booking.startAt) < now);

  return (
    <main className="min-h-screen bg-[#f6f2ea] text-neutral-900">
      <header className="border-b border-neutral-200 bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm uppercase tracking-[0.25em] text-neutral-500">
          <Link className="font-semibold" href={`/${locale}`}>
            {t('brand')}
          </Link>
          <nav className="hidden items-center gap-8 text-[0.7rem] font-semibold text-neutral-500 md:flex">
            <span>{t('nav.services')}</span>
            <span>{t('nav.about')}</span>
            <span>{t('nav.history')}</span>
          </nav>
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 text-xs text-neutral-600">
            {t('nav.account')}
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-12">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col gap-10">
            <header className="space-y-3">
              <h1 className={`${playfair.className} text-4xl md:text-5xl`}>{t('title')}</h1>
              <p className="max-w-xl text-sm text-neutral-600">{t('subtitle')}</p>
            </header>

            <section className="space-y-6">
              <div className="flex items-center justify-between text-neutral-500">
                <span className={`${playfair.className} text-lg italic`}>{t('upcoming.title')}</span>
                <span className="text-xs uppercase tracking-[0.3em]">
                  {t('upcoming.count', {count: upcoming.length})}
                </span>
              </div>

              {loadError ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-600">
                  {t('loadError')}
                </div>
              ) : null}

              {!loadError && upcoming.length === 0 ? (
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm text-neutral-600">
                  {t('emptyUpcoming')}
                </div>
              ) : null}

              <div className="space-y-5">
                {upcoming.map((item) => {
                  const startAt = new Date(item.startAt);
                  const endAt = new Date(item.endAt);
                  const durationMinutes = Math.max(
                    0,
                    Math.round((endAt.getTime() - startAt.getTime()) / 60000),
                  );
                  const service = item.services[0];
                  const statusKey = item.status.toLowerCase();

                  return (
                    <article
                      className="flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)] md:flex-row"
                      key={item.id}
                    >
                      <div className="h-28 w-full rounded-2xl bg-[linear-gradient(135deg,#cdb9a0,#efe7d7)] md:h-32 md:w-40" />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">
                          <span>{service?.category ?? t('defaultCategory')}</span>
                          <span className="rounded-full bg-olive-100 px-3 py-1 text-[0.6rem] font-semibold text-olive-700">
                            {t(`status.${statusKey}`)}
                          </span>
                        </div>
                        <h3 className={`${playfair.className} text-2xl`}>
                          {service?.name ?? t('defaultTitle')}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                          <span>
                            {t('upcoming.dateLabel')} {formatDate.format(startAt)}
                          </span>
                          <span>
                            {t('upcoming.timeLabel')} {formatTime.format(startAt)} ·{' '}
                            {t('durationMinutes', {count: durationMinutes})}
                          </span>
                        </div>
                        <div className="text-xs text-neutral-500">
                          {t('upcoming.with')} {item.staffName ?? t('unknownTherapist')}
                        </div>
                        <div className="flex flex-wrap gap-3 pt-2">
                          <button className="rounded-full bg-olive-700 px-5 py-2 text-xs font-semibold text-white">
                            {t('upcoming.reschedule')}
                          </button>
                          <button className="rounded-full border border-neutral-300 px-5 py-2 text-xs font-semibold text-neutral-600">
                            {t('upcoming.cancel')}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between text-neutral-500">
                <span className={`${playfair.className} text-lg italic`}>{t('past.title')}</span>
                <span className="text-xs uppercase tracking-[0.3em]">
                  {t('past.count', {count: past.length})}
                </span>
              </div>

              {!loadError && past.length === 0 ? (
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm text-neutral-600">
                  {t('emptyPast')}
                </div>
              ) : null}

              {past.length > 0 ? (
                <div className="rounded-3xl border border-neutral-200 bg-white p-5">
                  {past.map((item) => {
                    const startAt = new Date(item.startAt);
                    const service = item.services[0];
                    const statusKey = item.status.toLowerCase();
                    return (
                      <div className="flex items-center justify-between" key={item.id}>
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,#cdb9a0,#efe7d7)]" />
                          <div>
                            <div className="text-sm font-semibold text-neutral-900">
                              {service?.name ?? t('defaultTitle')}
                            </div>
                            <div className="text-xs text-neutral-500">
                              {formatDate.format(startAt)} · {t(`status.${statusKey}`)}
                            </div>
                          </div>
                        </div>
                        <button className="text-xs font-semibold text-olive-700">
                          {t('past.viewReceipt')}
                        </button>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </section>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]">
              <h2 className={`${playfair.className} text-2xl`}>{t('stayConnected.title')}</h2>
              <p className="mt-2 text-sm text-neutral-600">{t('stayConnected.subtitle')}</p>

              <div className="mt-5 space-y-4 text-sm text-neutral-600">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-neutral-900">{t('stayConnected.sms')}</div>
                    <div className="text-xs text-neutral-500">{t('stayConnected.smsHint')}</div>
                  </div>
                  <div className="flex h-6 w-12 items-center rounded-full bg-olive-700 p-1">
                    <span
                      className={`h-4 w-4 rounded-full bg-white transition ${
                        true ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-neutral-900">{t('stayConnected.email')}</div>
                    <div className="text-xs text-neutral-500">{t('stayConnected.emailHint')}</div>
                  </div>
                  <div className="flex h-6 w-12 items-center rounded-full bg-olive-700 p-1">
                    <span
                      className={`h-4 w-4 rounded-full bg-white transition ${
                        true ? 'translate-x-6' : 'translate-x-0'
                      }`}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-500">
                <div className="font-semibold text-neutral-700">{t('stayConnected.helpTitle')}</div>
                <div className="mt-1">{t('stayConnected.helpBody')}</div>
              </div>
            </div>

            <div className="rounded-3xl bg-olive-800 px-6 py-8 text-white">
              <h3 className={`${playfair.className} text-2xl`}>{t('membership.title')}</h3>
              <p className="mt-2 text-sm text-olive-100">{t('membership.body')}</p>
              <button className="mt-6 rounded-full border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                {t('membership.cta')}
              </button>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
