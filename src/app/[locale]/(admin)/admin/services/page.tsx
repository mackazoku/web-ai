import Image from 'next/image';
import Link from 'next/link';
import {Newsreader, Manrope} from 'next/font/google';
import {getLocale, getTranslations} from 'next-intl/server';

import {prisma} from '@/modules/shared/db/prisma';

export const dynamic = 'force-dynamic';

const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

const imageFallbacks = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB5RP4k_GRvIFfkdiyfKtXsYAmK2EySAnf-5xSeObh7oWIF_1LPO7B_21Ggg7X3dH4aVAQi1DYBf2Y18wvypvrMmdXE9QK7bLbh_PbJQsXk3Aru7SLsN37kScdwUjC76IYIamqMV2HfsHiDN73WBk_D4gD-jaxb4gAGmcLQsx5QVAz8XAs7lap_G65In7n1Z1UF4CPU5ytqJFjjyJSvgfd1tmhHI89Z_Q88pj6sTuEgBLuM4hqQjiaeMJw6iJh_UMkn4x2V6We_jE0F',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCj3kfVp7wYfA3l16zvHIJA37ckK_6mKKUKqrs2-sLtOkNdXkdLypiaM_wK1Vv00yz8PIxrrsfQE1NfMe3FEAxBO8L4xvhfZWbkDdmo92qxN383VD_Rnmx8M74aBYVUFOtxI9_OOSO-r9-nfUl3oU3UTzsMBulVybZNCzSi0J_X2g6N-CUB6vLpmuStjNwgZuBj2IapOMs7RGilF3u2PgIcFIEePZtoE-iAZsLIOriijMPizQdrdlK0LKRbfCjc5j4qlQyFFM1sOjCM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuATrfBhlTZ6kUoiZFX18slQuX12TF9jTq7dcD-pJp8x_e6EOFAEnC4JnQOyol4DSzIapNk56BR4C3pfK6163CHAdv4bQAgNS9w4zjasWmwy2xtU99CoXnqUISWHxe_g4Hx6pqDFR30kJq1EW9TdOR-HpmLEcMNlBe8-hYuoS3pwnoD95mM__x8_dif_LGN30A2zK7a4VLQaqWD7d0b3EOEIV5AjKQyqDEk7xeg0CW6oqYudSQihvMwLzq9PtCsAc9UUT3_dwturXEhq',
];

type ServiceCard = {
  id: string;
  name: string;
  description: string | null;
  durationMinutes: number;
  priceCents: number;
  status: 'active' | 'draft' | 'hidden';
  imageUrl: string;
};

const statusStyles: Record<ServiceCard['status'], string> = {
  active: 'bg-[#d6e9bd] text-[#3c4c2b]',
  draft: 'bg-[#e8e2d6] text-[#625e55]',
  hidden: 'bg-[#f4f3f2] text-[#68645b]',
};

export default async function AdminServicesPage() {
  const locale = await getLocale();
  const tAdmin = await getTranslations('Admin');
  const t = await getTranslations('AdminServices');

  let services: ServiceCard[] = [];
  let hasError = false;

  try {
    const records = await prisma.service.findMany({
      orderBy: {createdAt: 'desc'},
      take: 12,
    });

    services = records.map((service, index) => ({
      id: service.id,
      name: service.name,
      description: service.description,
      durationMinutes: service.durationMinutes,
      priceCents: service.priceCents,
      status: service.active ? 'active' : 'hidden',
      imageUrl: imageFallbacks[index % imageFallbacks.length],
    }));
  } catch (error) {
    hasError = true;
  }

  const totalCount = services.length;
  const activeCount = services.filter((service) => service.status === 'active').length;
  const draftCount = services.filter((service) => service.status === 'draft').length;
  const hasServices = services.length > 0;
  const featuredDescription = services[0]?.description ?? t('fallback.description');

  const formatCurrency = (valueCents: number) =>
    new Intl.NumberFormat(locale, {style: 'currency', currency: 'USD'}).format(
      valueCents / 100,
    );

  return (
    <main className={`${manrope.className} min-h-screen bg-[#faf9f8] text-[#1a1c1c]`}>
      <div className="flex min-h-screen">
        <aside className="sticky top-0 hidden h-screen w-64 flex-col bg-[#f4f3f2] py-8 md:flex">
          <div className="px-8">
            <h1 className={`${newsreader.className} text-2xl italic text-[#536441]`}>
              {tAdmin('sidebar.brand')}
            </h1>
            <p className="mt-1 text-xs uppercase tracking-[0.35em] text-[#75786e]">
              {tAdmin('sidebar.suite')}
            </p>
          </div>
          <nav className="mt-10 flex-1 space-y-2 text-sm text-[#75786e]">
            {[
              {key: 'dashboard', href: `/${locale}/admin`},
              {key: 'users', href: `/${locale}/admin/users`},
              {key: 'services', href: `/${locale}/admin/services`},
              {key: 'staff', href: `/${locale}/admin`},
              {key: 'reports', href: `/${locale}/admin`},
            ].map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`flex items-center gap-3 px-8 py-3 transition-all hover:bg-[#e3e2e1] ${
                  item.key === 'services'
                    ? 'ml-4 rounded-l-full bg-white px-4 font-semibold text-[#536441] shadow-sm'
                    : ''
                }`}
              >
                <span className="h-2 w-2 rounded-full bg-current" aria-hidden />
                <span>{tAdmin(`sidebar.nav.${item.key}`)}</span>
              </Link>
            ))}
          </nav>
          <div className="px-6">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#536441] to-[#9caf87] py-4 text-sm font-medium text-white shadow-[0_32px_32px_-4px_rgba(26,28,28,0.06)] transition-transform hover:scale-[0.98]"
            >
              <span className="text-lg" aria-hidden>
                +
              </span>
              {tAdmin('sidebar.newBooking')}
            </button>
          </div>
        </aside>

        <section className="flex-1 px-8 py-12 md:px-16">
          <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#75786e]">
                <span>{t('breadcrumb.admin')}</span>
                <span aria-hidden className="text-[10px]">
                  /
                </span>
                <span className="font-semibold text-[#536441]">{t('breadcrumb.services')}</span>
              </nav>
              <div>
                <h2
                  className={`${newsreader.className} text-4xl italic tracking-tight text-[#1a1c1c] md:text-6xl`}
                >
                  {t('title')}
                </h2>
                <p className="mt-4 max-w-lg text-sm font-light leading-relaxed text-[#44483f]">
                  {t('subtitle')}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex min-w-[240px] flex-1 items-center gap-2 rounded-full border border-[#e3e2e1] bg-white px-4 py-3 text-sm text-[#75786e]">
                <span className="h-2 w-2 rounded-full border border-[#75786e]" aria-hidden />
                <input
                  type="text"
                  className="w-full bg-transparent text-sm text-[#1a1c1c] placeholder:text-[#75786e]"
                  placeholder={t('search.placeholder')}
                />
              </div>
              <button
                type="button"
                className="rounded-full bg-[#e8e2d6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#625e55]"
              >
                {t('filters.status')}
              </button>
              <button
                type="button"
                className="rounded-full bg-[#e8e2d6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#625e55]"
              >
                {t('filters.duration')}
              </button>
              <button
                type="button"
                className="rounded-xl bg-[#e3e2e1] px-6 py-4 text-sm font-medium text-[#536441] transition-colors hover:bg-[#e9e8e7]"
              >
                {t('add')}
              </button>
            </div>
          </header>

          <div className="mt-10 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#75786e]">
            {[
              {key: 'all', label: t('filters.all')},
              {key: 'active', label: t('status.active')},
              {key: 'draft', label: t('status.draft')},
              {key: 'hidden', label: t('status.hidden')},
            ].map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`rounded-full px-4 py-2 transition-colors ${
                  filter.key === 'all'
                    ? 'bg-[#536441] text-white'
                    : 'bg-[#f4f3f2] text-[#625e55]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="mt-12">
            {hasError ? (
              <div className="rounded-2xl bg-[#ffdad6] p-8 text-[#93000a]">
                <p className="text-lg font-semibold">{t('error.title')}</p>
                <button
                  type="button"
                  className="mt-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#93000a]"
                >
                  {t('error.retry')}
                </button>
              </div>
            ) : !hasServices ? (
              <div className="rounded-3xl bg-white p-10 text-center shadow-[0_32px_32px_-4px_rgba(26,28,28,0.06)]">
                <h3 className={`${newsreader.className} text-2xl text-[#1a1c1c]`}>
                  {t('empty.title')}
                </h3>
                <p className="mt-3 text-sm text-[#625e55]">{t('empty.description')}</p>
                <button
                  type="button"
                  className="mt-6 rounded-full bg-[#536441] px-6 py-3 text-sm font-semibold text-white"
                >
                  {t('empty.action')}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                {services[0] && (
                  <article className="group flex flex-col gap-8 rounded-3xl bg-white p-8 shadow-[0_32px_32px_-4px_rgba(26,28,28,0.06)] md:flex-row lg:col-span-8">
                    <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-[#f4f3f2] md:h-56 md:w-64">
                      <Image
                        src={services[0].imageUrl}
                        alt={services[0].name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-6">
                      <div>
                        <div className="flex items-center justify-between">
                          <span
                            className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] ${
                              statusStyles[services[0].status]
                            }`}
                          >
                            {t(`status.${services[0].status}`)}
                          </span>
                          <span className="text-sm italic text-[#625e55]">
                            {t('duration', {minutes: services[0].durationMinutes})}
                          </span>
                        </div>
                        <h3
                          className={`${newsreader.className} mt-3 text-3xl text-[#1a1c1c]`}
                        >
                          {services[0].name}
                        </h3>
                        {featuredDescription && (
                          <p className="mt-2 text-sm text-[#75786e]">
                            {featuredDescription}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <span
                          className={`${newsreader.className} text-2xl text-[#536441]`}
                        >
                          {formatCurrency(services[0].priceCents)}
                        </span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            className="text-xs font-semibold uppercase tracking-[0.2em] text-[#75786e] transition-colors hover:text-[#536441]"
                          >
                            {t('actions.edit')}
                          </button>
                          <button
                            type="button"
                            className="rounded-full border border-[#e3e2e1] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#625e55]"
                          >
                            {t('actions.visibility')}
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                )}

                <aside className="flex flex-col justify-between rounded-3xl bg-[#536441] p-8 text-white shadow-[0_32px_32px_-4px_rgba(26,28,28,0.06)] lg:col-span-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      {t('insights.title')}
                    </p>
                    <p className={`${newsreader.className} mt-4 text-4xl italic`}>
                      {totalCount}
                    </p>
                  </div>
                  <div className="space-y-3 text-xs uppercase tracking-[0.2em] text-white/70">
                    <div className="flex items-center justify-between">
                      <span>{t('insights.active')}</span>
                      <span className="text-sm text-white">{activeCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{t('insights.draft')}</span>
                      <span className="text-sm text-white">{draftCount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{t('insights.total')}</span>
                      <span className="text-sm text-white">{totalCount}</span>
                    </div>
                  </div>
                </aside>

                {services.slice(1).map((service) => (
                  <article
                    key={service.id}
                    className="flex flex-col gap-6 rounded-3xl bg-[#f4f3f2] p-6 transition-colors hover:bg-[#e9e8e7] lg:col-span-4"
                  >
                    <div className="relative h-40 w-full overflow-hidden rounded-2xl bg-white">
                      <Image
                        src={service.imageUrl}
                        alt={service.name}
                        fill
                        className="object-cover opacity-90"
                      />
                    </div>
                    <div>
                      <div className="flex items-start justify-between">
                        <h3
                          className={`${newsreader.className} text-xl text-[#1a1c1c]`}
                        >
                          {service.name}
                        </h3>
                        <span className={`${newsreader.className} text-[#536441]`}>
                          {formatCurrency(service.priceCents)}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#75786e]">
                        <span>{t('duration', {minutes: service.durationMinutes})}</span>
                        <span className="h-1 w-1 rounded-full bg-[#c5c8bc]" aria-hidden />
                        <span
                          className={`rounded-full px-2 py-1 text-[10px] ${
                            statusStyles[service.status]
                          }`}
                        >
                          {t(`status.${service.status}`)}
                        </span>
                      </div>
                      {service.description && (
                        <p className="mt-3 text-sm text-[#625e55]">
                          {service.description}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between border-t border-[#c5c8bc]/20 pt-4 text-xs uppercase tracking-[0.2em] text-[#75786e]">
                      <button
                        type="button"
                        className="font-semibold transition-colors hover:text-[#536441]"
                      >
                        {t('actions.manage')}
                      </button>
                      <button
                        type="button"
                        className="font-semibold transition-colors hover:text-[#536441]"
                      >
                        {t('actions.visibility')}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
