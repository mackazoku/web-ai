import Link from 'next/link';
import {Playfair_Display} from 'next/font/google';
import {getLocale, getTranslations} from 'next-intl/server';

import customerData from '@/modules/public/data/customer.json';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export default async function BookingsPage() {
  const t = await getTranslations('CustomerProfile');
  const locale = await getLocale();
  const {upcoming, past, notifications} = customerData;

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
                <span className={`${playfair.className} text-lg italic`}>
                  {t('upcoming.title')}
                </span>
                <span className="text-xs uppercase tracking-[0.3em]">
                  {t('upcoming.count', {count: upcoming.length})}
                </span>
              </div>
              <div className="space-y-5">
                {upcoming.map((item) => (
                  <article
                    className="flex flex-col gap-5 rounded-3xl border border-neutral-200 bg-white p-5 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)] md:flex-row"
                    key={item.key}
                  >
                    <div className="h-28 w-full rounded-2xl bg-[linear-gradient(135deg,#cdb9a0,#efe7d7)] md:h-32 md:w-40" />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">
                        <span>{t(`upcoming.items.${item.key}.category`)}</span>
                        <span className="rounded-full bg-olive-100 px-3 py-1 text-[0.6rem] font-semibold text-olive-700">
                          {t(`status.${item.status}`)}
                        </span>
                      </div>
                      <h3 className={`${playfair.className} text-2xl`}>
                        {t(`upcoming.items.${item.key}.title`)}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-500">
                        <span>
                          {t('upcoming.dateLabel')} {item.date}
                        </span>
                        <span>
                          {t('upcoming.timeLabel')} {item.time} · {item.duration}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-500">
                        {t('upcoming.with')} {t(`therapists.${item.therapistKey}`)}
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
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex items-center justify-between text-neutral-500">
                <span className={`${playfair.className} text-lg italic`}>
                  {t('past.title')}
                </span>
                <span className="text-xs uppercase tracking-[0.3em]">
                  {t('past.count', {count: past.length})}
                </span>
              </div>
              <div className="rounded-3xl border border-neutral-200 bg-white p-5">
                {past.map((item) => (
                  <div className="flex items-center justify-between" key={item.key}>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,#cdb9a0,#efe7d7)]" />
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">
                          {t(`past.items.${item.key}.title`)}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {item.date} · {t(`status.${item.status}`)}
                        </div>
                      </div>
                    </div>
                    <button className="text-xs font-semibold text-olive-700">
                      {t('past.viewReceipt')}
                    </button>
                  </div>
                ))}
              </div>
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
                        notifications.sms ? 'translate-x-6' : 'translate-x-0'
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
                        notifications.email ? 'translate-x-6' : 'translate-x-0'
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
