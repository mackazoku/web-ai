import Image from 'next/image';
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
  const heroImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD6LaCEzKICKOIf-ZcujBCCwxEyC2V7pM-35Qy7PfhbC64UTior8SZdc1jtpIaeIfKyTpAs1-wN8Xx5g6JwUN9fJc-b8oXhzfNTg2ORzF8DY5bFHkCpxA1mswmMyyFTkul3Z_ETiPT8vC_-3GCmHL7SO2v-fII7I4JQVIWKei3uX0OEs0DMWYFfK0MfgUTwGiO9cYkvt3sAbjzCkjFpnuBTDK0loEeQ8PUrIbhWCTafcZDar2kYuiGsCYw3noM_XyBO7LoOMBJYL571';
  const storyImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAKtTiZrCi9aB5Ba20GmB3esI0Sc9t_X1LkedJ97vT1mr4IInF-9hePT7RYfJ_2BAEjODVpdGifgYXeJNUOxgN5FPNaNFH3oEKxQS3nuBF-XqNEZ92Gh3sLITXgov_wPWLmOBZuHB5oD2Afly4xb0ZJOujqHDyAKsImc0GM-Npp1FtEWJbSnB6S89hSlPneJGojWwcmeeixKrw2oMZd6Vdc7_ifVzyxYjwnsdvZNEvQknkuRtzeDM5QGXiEADkyvwKK6L06vjColGRF';
  const seasonalImages: Record<string, string> = {
    signature:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA6QbIyxEmMJ0u614H32oKrjDtyt7a_MsUH1G-SgWbMszpVLVfZJfX9MSZ0BYAnsd12CdLJekBTxxlSOIOq0InFxlFDyvkoYq91gDj_KN2kNkQ6Z9Bz7mhX_oeZ1e5gRIL8nvzcDUf4aDeVESZ4EgELlmWo3esZRA8r0a1fRNkFWqenRt-H_tyw5lf_TSo7bh_orle9k-_tyKxhb8EqHIDR2YhmFR_PpTqPtkfFlzpULBeD6EZ6x-UrfAeNAYyq5nL6qERWMuvrp30k',
    botanical:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBaw7dyp4LrodvdpoZ6MPwBoK5POL0Pgu7KgDQWOYqWOvJugfgYWF6bP54-jCvlpducGWY8A40IyJlc7MWIh0uzMsOZWQeXqW0nrWsQGUE1DEhcJELq3063ejxRhuMm7OS6_Xmu5eaV2DbFQne2SPLr0z5mq-dMFrlFoUTqAcCoj9KYnTBupputLD9NzMnGgLIFUxTl3cqFEUc4FCC94GTGx79xdjlM2JDO0j7Ei60i_5Ci2pECeXLDk69rVuUu4RJLenc2qZt3Bccb',
    volcanic:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtMEQTUEYOU-Qchi0XDXzEap1N0B4NsqlPmTIMqo6knwkUCpY4umRJD9YB-ytf85mAHHhSB5736Cte7dE5JAevinz3Tu3tqvqWwrIh5ny__UuyDR1pzy4uMgmVWkVUKf-hQ-ist1LAiCfYNgo7LRHLtdpENBViiEpleSrn49GqYrzuCF0ivVEyF1VBo58ocFH5fIFXn_RpKyUFivakR7BKbFXSgWSrjDVUMGrxDDLOCigPArnF9WAQvUrAqt__mU1ftG8dqsMGaCoO',
  };

  return (
    <main className="min-h-screen bg-[#f6f2ea] text-neutral-900">
      <header className="border-b border-neutral-200 bg-white/70">
        <div className="mx-auto flex w-full max-w-none items-center justify-between px-32 py-5 text-sm uppercase tracking-[0.25em] text-neutral-500 sm:px-40 lg:px-56 xl:px-64">
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

      <section className="relative flex min-h-[820px] items-center overflow-hidden px-32 pb-20 pt-20 sm:px-40 lg:px-56 xl:px-64">
        <div className="absolute inset-y-0 left-32 right-32 sm:left-40 sm:right-40 lg:left-56 lg:right-56 xl:left-64 xl:right-64">
          <Image
            alt={t('hero.imageAlt')}
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src={heroImage}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#faf9f8]/90 via-[#faf9f8]/40 to-transparent" />
        </div>
        <div className="mx-auto w-full max-w-none px-8 sm:px-12 lg:px-16 xl:px-20">
          <div className="relative grid gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
                {t('hero.kicker')}
              </p>
              <h1 className={`${playfair.className} text-4xl leading-tight md:text-6xl`}>
                {t('hero.title')}{' '}
                <span className="italic text-olive-700">{t('hero.emphasis')}</span>
              </h1>
              <p className="max-w-xl text-lg text-neutral-600">{t('hero.subtitle')}</p>
              <div className="flex flex-wrap items-center gap-5">
                <Link
                  className="rounded-full bg-olive-700 px-8 py-4 text-sm font-semibold text-white shadow-[0_20px_50px_-30px_rgba(83,100,65,0.6)]"
                  href={`/${locale}/booking`}
                >
                  {t('hero.primaryCta')}
                </Link>
                <button className="flex items-center gap-2 border-b-2 border-olive-200 pb-1 text-sm font-semibold text-olive-700">
                  {t('hero.secondaryCta')}
                </button>
              </div>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-none px-32 pb-16 sm:px-40 lg:px-56 xl:px-64">
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

      <section className="mx-auto w-full max-w-none px-32 pb-20 sm:px-40 lg:px-56 xl:px-64">
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
              <div className="relative h-40 overflow-hidden rounded-t-3xl bg-neutral-100">
                <Image
                  alt={t(`seasonal.items.${item.key}.imageAlt`)}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  src={seasonalImages[item.key] ?? heroImage}
                />
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(250,249,248,0.6),rgba(255,255,255,0.05))]" />
              </div>
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

      <section className="mx-auto w-full max-w-none px-32 pb-16 sm:px-40 lg:px-56 xl:px-64">
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

      <section className="mx-auto w-full max-w-none px-32 pb-16 sm:px-40 lg:px-56 xl:px-64">
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
          <div className="relative overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              alt={t('story.imageAlt')}
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 100vw, 520px"
              src={storyImage}
            />
            <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(250,249,248,0.55),rgba(255,255,255,0.05))]" />
            <div className="absolute -bottom-12 right-0 h-48 w-48 rounded-full bg-olive-200/30 blur-3xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-none px-32 pb-16 text-center sm:px-40 lg:px-56 xl:px-64">
        <p className={`${playfair.className} text-xl text-neutral-700 md:text-2xl`}>
          {t('testimonial.quote')}
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
          {t('testimonial.author')}
        </p>
      </section>

      <section className="mx-auto w-full max-w-none px-32 pb-20 sm:px-40 lg:px-56 xl:px-64">
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
