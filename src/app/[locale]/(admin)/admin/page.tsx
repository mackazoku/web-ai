import Link from 'next/link';
import {headers} from 'next/headers';
import {Playfair_Display} from 'next/font/google';
import {getLocale, getTranslations} from 'next-intl/server';

import dashboardData from '@/modules/admin/data/dashboard.json';
import LogoutButton from '@/modules/admin/components/logout-button';

type DashboardStat = {
  key: 'revenue' | 'bookings' | 'cancellations';
  value?: number;
  valueCents?: number;
  delta: string;
  trend: 'up' | 'down' | 'neutral';
};

type DashboardScheduleBlock = {
  key: string;
  label: string;
  staffName: string;
  time: string;
  startAt?: string;
  endAt?: string;
};

type DashboardScheduleRow = {
  key: string;
  label: string;
  blocks: DashboardScheduleBlock[];
};

type DashboardData = {
  user?: {
    name: string;
    email?: string;
    role?: string;
  };
  stats: DashboardStat[];
  schedule: {
    date: string;
    rows: DashboardScheduleRow[];
  };
  pending: Array<{
    key: string;
    name: string;
    serviceName: string;
    duration: string;
    timeAgo: string;
  }>;
  activity: Array<{
    key: string;
    title: string;
    detail: string;
  }>;
};

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

const calendarStartHour = 9;
const calendarEndHour = 18;
const calendarSlotMinutes = 30;

const buildTimeSlots = () => {
  const slots: string[] = [];
  const slotCount = ((calendarEndHour - calendarStartHour) * 60) / calendarSlotMinutes;
  for (let index = 0; index < slotCount; index += 1) {
    const minutesTotal = calendarStartHour * 60 + index * calendarSlotMinutes;
    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;
    const label = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
    slots.push(label);
  }
  return slots;
};

const buildTimeMarkers = (totalSlots: number) => {
  const markers: Array<{label: string; startSlot: number; spanSlots: number}> = [];
  const stepHours = 1;
  const stepSlots = (stepHours * 60) / calendarSlotMinutes;
  for (let hour = calendarStartHour; hour <= calendarEndHour - 1; hour += stepHours) {
    const startSlot = (hour - calendarStartHour) * (60 / calendarSlotMinutes);
    const remainingSlots = totalSlots - startSlot;
    const spanSlots = Math.min(stepSlots, remainingSlots);
    markers.push({
      label: `${String(hour).padStart(2, '0')}:00`,
      startSlot,
      spanSlots,
    });
  }
  return markers;
};

const getColumnRange = (startAt?: string, endAt?: string) => {
  if (!startAt || !endAt) return null;
  const start = new Date(startAt);
  const end = new Date(endAt);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return null;
  }

  const startMinutes = start.getHours() * 60 + start.getMinutes();
  const endMinutes = end.getHours() * 60 + end.getMinutes();
  const baseMinutes = calendarStartHour * 60;
  const totalMinutes = (calendarEndHour - calendarStartHour) * 60;
  const normalizedStart = Math.max(0, Math.min(totalMinutes, startMinutes - baseMinutes));
  const normalizedEnd = Math.max(0, Math.min(totalMinutes, endMinutes - baseMinutes));
  if (normalizedEnd <= normalizedStart) {
    return null;
  }

  const startSlot = Math.floor(normalizedStart / calendarSlotMinutes);
  const endSlot = Math.ceil(normalizedEnd / calendarSlotMinutes);
  const gridStart = 2 + startSlot;
  const gridEnd = 2 + endSlot;
  return {gridStart, gridEnd};
};

type AdminPageProps = {
  searchParams?: {date?: string};
};

export default async function AdminPage({searchParams}: AdminPageProps) {
  const t = await getTranslations('Admin');
  const locale = await getLocale();
  const adminNavItems = ['dashboard', 'users', 'services', 'staff', 'reports'];
  const scheduleTimes = buildTimeSlots();
  const scheduleMarkers = buildTimeMarkers(scheduleTimes.length);
  const requestHeaders = headers();
  const host = requestHeaders.get('x-forwarded-host') ?? requestHeaders.get('host');
  const proto = requestHeaders.get('x-forwarded-proto') ?? 'https';
  const origin = host ? `${proto}://${host}` : '';
  const cookie = requestHeaders.get('cookie') ?? '';
  const dateParam = searchParams?.date ?? '';
  const selectedDate = dateParam ? new Date(dateParam) : new Date();
  const baseDate = Number.isNaN(selectedDate.getTime()) ? new Date() : selectedDate;
  const prevDate = new Date(baseDate);
  prevDate.setDate(baseDate.getDate() - 1);
  const nextDate = new Date(baseDate);
  nextDate.setDate(baseDate.getDate() + 1);
  const formatDateParam = (date: Date) =>
    `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(
      date.getDate(),
    ).padStart(2, '0')}`;
  const dateQuery = formatDateParam(baseDate);
  const dashboard: DashboardData =
    (await fetch(`${origin}/api/admin/dashboard?date=${dateQuery}`, {
      cache: 'no-store',
      headers: cookie ? {cookie} : undefined,
    })
      .then((response) => (response.ok ? response.json() : null))
      .catch(() => null)) ??
    ({
      stats: [],
      schedule: {date: new Date().toISOString(), rows: []},
      pending: [],
      activity: [],
    } as DashboardData);
  const formatCurrency = (valueCents: number) =>
    new Intl.NumberFormat(locale, {style: 'currency', currency: 'USD'}).format(
      valueCents / 100,
    );
  const userName = dashboard.user?.name ?? t('sidebar.user.name');
  const userRoleKey = dashboard.user?.role ?? 'admin';
  const navItems = userRoleKey === 'admin' ? adminNavItems : ['dashboard'];

  return (
    <main className="min-h-screen bg-[#f6f2ea] text-neutral-900">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-6 py-10 lg:grid-cols-[260px_1fr]">
        <aside className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-[0_24px_70px_-55px_rgba(0,0,0,0.45)]">
          <div className="space-y-6">
            <div>
              <p className={`${playfair.className} text-lg text-olive-800`}>{t('sidebar.brand')}</p>
              <p className="text-[0.65rem] uppercase tracking-[0.3em] text-neutral-500">
                {t('sidebar.suite')}
              </p>
            </div>
            <nav className="space-y-4 text-sm text-neutral-600">
              {navItems.map((item) => (
                <div className="flex items-center gap-3" key={item}>
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border ${
                      item === 'dashboard' ? 'border-olive-700' : 'border-neutral-300'
                    }`}
                  >
                    <span
                      className={`h-2 w-2 rounded-full ${
                        item === 'dashboard' ? 'bg-olive-700' : 'bg-neutral-300'
                      }`}
                    />
                  </span>
                  {item === 'dashboard' || item === 'users' ? (
                    <Link
                      className={item === 'dashboard' ? 'font-semibold text-olive-700' : ''}
                      href={`/${locale}/admin${item === 'users' ? '/users' : ''}`}
                    >
                      {t(`sidebar.nav.${item}`)}
                    </Link>
                  ) : (
                    <span>{t(`sidebar.nav.${item}`)}</span>
                  )}
                </div>
              ))}
            </nav>
            <button className="w-full rounded-2xl bg-olive-700 px-4 py-3 text-sm font-semibold text-white">
              {t('sidebar.newBooking')}
            </button>
          </div>
          <div className="flex items-center gap-3 border-t border-neutral-200 pt-4 text-sm text-neutral-600">
            <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#cdb9a0,#efe7d7)]" />
            <div>
              <div className="font-semibold text-neutral-900">{userName}</div>
              <div className="text-xs text-neutral-500">
                {t(`sidebar.roles.${userRoleKey}`)}
              </div>
            </div>
          </div>
          <LogoutButton label={t('sidebar.logout')} locale={locale} />
        </aside>

        <div className="space-y-10">
          <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className={`${playfair.className} text-4xl md:text-5xl`}>
                {t('header.greeting', {name: userName})}
              </h1>
              <p className="mt-2 text-sm text-neutral-600">{t('header.subtitle')}</p>
            </div>
            <div className="flex w-full max-w-sm items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-500 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-neutral-400" />
              <input
                className="flex-1 bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400"
                placeholder={t('header.search')}
              />
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-xs text-neutral-500">
                {t('header.avatar')}
              </div>
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-3">
            {dashboard.stats.map((stat) => (
              <div
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]"
                key={stat.key}
              >
                <div className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                  {t(`stats.${stat.key}.label`)}
                </div>
                <div className={`${playfair.className} mt-4 text-3xl text-neutral-900`}>
                  {stat.key === 'revenue'
                    ? formatCurrency(stat.valueCents ?? 0)
                    : stat.key === 'cancellations'
                      ? `${(stat.value ?? 0).toFixed(1)}%`
                      : `${stat.value ?? 0}`}
                </div>
                <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500">
                  <span
                    className={`font-semibold ${
                      stat.trend === 'down' ? 'text-red-500' : 'text-olive-700'
                    }`}
                  >
                    {stat.delta}
                  </span>
                  <span>{t(`stats.${stat.key}.note`)}</span>
                </div>
                {stat.key === 'cancellations' ? (
                  <div className="mt-4 text-xs text-neutral-500">
                    {t('stats.cancellations.industry')}
                  </div>
                ) : null}
              </div>
            ))}
          </section>

          <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className={`${playfair.className} text-2xl`}>{t('schedule.title')}</h2>
                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <Link
                    className="rounded-full border border-neutral-200 px-3 py-1"
                    href={`/${locale}/admin?date=${formatDateParam(prevDate)}`}
                  >
                    {'<'}
                  </Link>
                  <span>
                    {new Intl.DateTimeFormat(locale, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    }).format(new Date(dashboard.schedule.date))}
                  </span>
                  <Link
                    className="rounded-full border border-neutral-200 px-3 py-1"
                    href={`/${locale}/admin?date=${formatDateParam(nextDate)}`}
                  >
                    {'>'}
                  </Link>
                </div>
              </div>
              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]">
                <div
                  className="grid text-xs uppercase tracking-[0.2em] text-neutral-400"
                  style={{
                    gridTemplateColumns: `150px repeat(${scheduleTimes.length}, minmax(0, 1fr))`,
                  }}
                >
                  <span>{t('schedule.roomLabel')}</span>
                  {scheduleMarkers.map((marker) => (
                    <span
                      className="text-center"
                      key={marker.label}
                      style={{
                        gridColumn: `${2 + marker.startSlot} / ${2 + marker.startSlot + marker.spanSlots}`,
                      }}
                    >
                      {marker.label}
                    </span>
                  ))}
                </div>
                <div className="mt-6 space-y-4">
                  {dashboard.schedule.rows.map((row) => (
                    <div
                      className="grid items-center gap-2"
                      key={row.key}
                      style={{
                        gridTemplateColumns: `150px repeat(${scheduleTimes.length}, minmax(0, 1fr))`,
                      }}
                    >
                      <div className="text-sm font-semibold text-neutral-700">
                        {row.label}
                      </div>
                      {row.blocks.map((block) => {
                        const range = getColumnRange(block.startAt, block.endAt);
                        if (!range) {
                          return null;
                        }
                        return (
                          <div
                            className="min-w-0 rounded-2xl border border-olive-200 bg-olive-100 px-3 py-2 text-[0.7rem] text-olive-900 shadow-sm"
                            key={block.key}
                            style={{gridColumn: `${range.gridStart} / ${range.gridEnd}`}}
                          >
                            <div className="truncate font-semibold">{block.label}</div>
                            <div className="text-[0.65rem] text-olive-700">
                              {block.staffName} · {block.time}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <aside className="space-y-6">
              <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]">
                <h3 className={`${playfair.className} text-xl`}>{t('pending.title')}</h3>
                <div className="mt-4 space-y-4">
                  {dashboard.pending.map((item) => (
                    <div className="rounded-2xl border border-neutral-200 p-4" key={item.key}>
                      <div className="flex items-start justify-between text-sm">
                        <div>
                          <div className="font-semibold text-neutral-900">{item.name}</div>
                          <div className="text-xs text-neutral-500">
                            {item.serviceName} / {item.duration}
                          </div>
                        </div>
                        <span className="text-xs text-neutral-400">{item.timeAgo}</span>
                      </div>
                      <div className="mt-3 flex gap-3 text-xs">
                        <button className="rounded-full bg-olive-700 px-4 py-2 font-semibold text-white">
                          {t('pending.approve')}
                        </button>
                        <button className="rounded-full border border-neutral-300 px-4 py-2 font-semibold text-neutral-600">
                          {t('pending.reject')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]">
                <div className="flex items-center justify-between">
                  <h3 className={`${playfair.className} text-xl`}>{t('activity.title')}</h3>
                  <button className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                    {t('activity.viewAll')}
                  </button>
                </div>
                <div className="mt-4 space-y-4">
                  {dashboard.activity.map((item) => (
                    <div className="flex items-center gap-3 text-sm text-neutral-600" key={item.key}>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-olive-100 text-olive-700">
                        {t('activity.icons.payment')}
                      </span>
                      <div>
                        <div className="font-semibold text-neutral-900">{item.title}</div>
                        <div className="text-xs text-neutral-500">{item.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
