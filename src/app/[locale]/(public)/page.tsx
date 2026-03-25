import Link from 'next/link';
import {Playfair_Display} from 'next/font/google';
import {getLocale, getTranslations} from 'next-intl/server';

import homeData from '@/modules/public/data/home.json';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export default async function HomePage() {
  const t = await getTranslations('PublicHome');
  const locale = await getLocale();

  return (
    <main className="min-h-screen bg-[#f6f2ea] text-neutral-900">
      <header className="border-b border-neutral-200 bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-sm uppercase tracking-[0.25em] text-neutral-500">
          <span>{t('brand')}</span>
          <nav className="hidden items-center gap-8 text-[0.7rem] font-semibold text-neutral-500 md:flex">
            <span>{t('nav.services')}</span>
            <span>{t('nav.about')}</span>
            <span>{t('nav.history')}</span>
          </nav>
          <Link
            className="rounded-full border border-neutral-300 px-4 py-2 text-[0.7rem] font-semibold text-neutral-600"
            href={`/${locale}/admin/login`}
          >
            {t('nav.admin')}
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
              {t('hero.kicker')}
            </p>
            <h1 className={`${playfair.className} text-4xl leading-tight md:text-6xl`}>
              {t('hero.title')} <span className="text-olive-800">{t('hero.emphasis')}</span>
            </h1>
            <p className="max-w-xl text-lg text-neutral-600">{t('hero.subtitle')}</p>
            <div className="flex flex-wrap gap-4">
              <Link
                className="rounded-full bg-olive-700 px-6 py-3 text-sm font-semibold text-white"
                href={`/${locale}/booking`}
              >
                {t('hero.primaryCta')}
              </Link>
              <button className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-700">
                {t('hero.secondaryCta')}
              </button>
            </div>
          </div>
          <div className="rounded-[32px] bg-[linear-gradient(135deg,#cfc6b7,#efe9dd)] p-6 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.5)]">
            <div className="h-72 w-full rounded-[28px] bg-[radial-gradient(circle_at_top,_#d8c9b2,_#b79f84)]" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="text-center">
          <h2 className={`${playfair.className} text-3xl md:text-4xl`}>{t('disciplines.title')}</h2>
          <p className="mt-2 text-sm text-neutral-600">{t('disciplines.subtitle')}</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {homeData.disciplines.map((item) => (
            <div
              className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]"
              key={item.key}
            >
              <div className="text-xs uppercase tracking-[0.3em] text-olive-700">
                {t(`disciplines.items.${item.key}.tag`)}
              </div>
              <h3 className={`${playfair.className} mt-4 text-2xl`}>
                {t(`disciplines.items.${item.key}.title`)}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                {t(`disciplines.items.${item.key}.body`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="flex items-center justify-between">
          <h2 className={`${playfair.className} text-3xl md:text-4xl`}>{t('seasonal.title')}</h2>
          <button className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            {t('seasonal.cta')}
          </button>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {homeData.seasonal.map((item) => (
            <div
              className="rounded-3xl border border-neutral-200 bg-white shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]"
              key={item.key}
            >
              <div className="h-40 rounded-t-3xl bg-[linear-gradient(135deg,#cdb9a0,#efe7d7)]" />
              <div className="p-5">
                <div className="text-xs uppercase tracking-[0.3em] text-olive-700">
                  {t('seasonal.tag')}
                </div>
                <h3 className={`${playfair.className} mt-3 text-xl`}>
                  {t(`seasonal.items.${item.key}.title`)}
                </h3>
                <p className="mt-2 text-xs text-neutral-500">
                  {item.duration} · {item.price}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-neutral-600">
                  <span>{t('seasonal.rating', {rating: item.rating})}</span>
                  <button className="rounded-full border border-neutral-200 px-3 py-1">
                    {t('seasonal.book')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[32px] border border-neutral-200 bg-white px-6 py-8 shadow-[0_24px_70px_-55px_rgba(0,0,0,0.35)] md:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                {t('branch.kicker')}
              </p>
              <h2 className={`${playfair.className} text-3xl`}>{t('branch.title')}</h2>
              <p className="mt-2 text-sm text-neutral-600">{t('branch.subtitle')}</p>
            </div>
            <div className="flex w-full flex-col gap-3 md:max-w-md md:flex-row">
              <select className="rounded-full border border-neutral-300 px-4 py-3 text-sm text-neutral-700">
                <option>{t('branch.selectPlaceholder')}</option>
                {homeData.branches.map((branch) => (
                  <option key={branch.key}>{branch.label}</option>
                ))}
              </select>
              <Link
                className="rounded-full bg-olive-700 px-6 py-3 text-sm font-semibold text-white"
                href={`/${locale}/booking`}
              >
                {t('branch.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-8 rounded-[32px] bg-white px-8 py-10 shadow-[0_30px_80px_-55px_rgba(0,0,0,0.4)] lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">{t('story.kicker')}</p>
            <h2 className={`${playfair.className} text-3xl`}>{t('story.title')}</h2>
            <p className="text-sm text-neutral-600">{t('story.body')}</p>
            <div className="mt-6 grid grid-cols-3 gap-6 text-center text-xs uppercase tracking-[0.2em] text-neutral-500">
              {homeData.stats.map((stat) => (
                <div key={stat.labelKey}>
                  <div className="text-2xl font-semibold text-neutral-900">{stat.value}</div>
                  <div className="mt-2">{t(`story.stats.${stat.labelKey}`)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-[linear-gradient(135deg,#bda78f,#f1e7d8)]" />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 text-center">
        <p className={`${playfair.className} text-xl text-neutral-700 md:text-2xl`}>
          {t('testimonial.quote')}
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
          {t('testimonial.author')}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-[32px] bg-olive-800 px-8 py-10 text-white">
          <h3 className={`${playfair.className} text-3xl`}>{t('newsletter.title')}</h3>
          <p className="mt-2 text-sm text-olive-100">{t('newsletter.subtitle')}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <input
              className="min-w-[220px] flex-1 rounded-full border border-olive-700 bg-olive-900 px-4 py-3 text-sm text-white placeholder:text-olive-300"
              placeholder={t('newsletter.placeholder')}
            />
            <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-olive-800">
              {t('newsletter.cta')}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
