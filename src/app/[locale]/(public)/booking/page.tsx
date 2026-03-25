'use client';

import Link from 'next/link';
import {Playfair_Display} from 'next/font/google';
import {useEffect, useMemo, useState} from 'react';
import {useParams} from 'next/navigation';
import {useTranslations} from 'next-intl';

import bookingData from '@/modules/public/data/booking.json';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export default function BookingPage() {
  const t = useTranslations('Booking');
  const params = useParams<{locale: string}>();
  const locale = params.locale ?? 'en';
  const summary = bookingData.summary;
  const [selectedService, setSelectedService] = useState(bookingData.services[0]?.key ?? '');
  const [selectedBranch, setSelectedBranch] = useState(bookingData.branches[0]?.key ?? '');
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  });
  const [selectedTime, setSelectedTime] = useState(bookingData.timeSlots[0] ?? '');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [therapists, setTherapists] = useState<Array<{id: string; name: string}>>([]);
  const [therapistStatus, setTherapistStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [selectedTherapistId, setSelectedTherapistId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const serviceDetails = useMemo(
    () => bookingData.services.find((service) => service.key === selectedService),
    [selectedService],
  );
  const branchLabel = useMemo(
    () => bookingData.branches.find((branch) => branch.key === selectedBranch)?.label,
    [selectedBranch],
  );
  const serviceLabel = useMemo(
    () => t(`service.items.${selectedService || summary.serviceKey}.title`),
    [selectedService, summary.serviceKey, t],
  );
  const selectedTherapist = useMemo(
    () => therapists.find((therapist) => therapist.id === selectedTherapistId),
    [selectedTherapistId, therapists],
  );
  const formattedDate = useMemo(() => {
    if (!selectedDate) return summary.date;
    return new Intl.DateTimeFormat(locale, {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(selectedDate);
  }, [locale, selectedDate, summary.date]);
  const monthLabel = useMemo(
    () =>
      new Intl.DateTimeFormat(locale, {month: 'long', year: 'numeric'}).format(
        visibleMonth,
      ),
    [locale, visibleMonth],
  );
  const calendarDays = useMemo(() => {
    const startOfMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
    const startDay = startOfMonth.getDay();
    const gridStart = new Date(
      visibleMonth.getFullYear(),
      visibleMonth.getMonth(),
      1 - startDay,
    );
    const days = Array.from({length: 42}, (_, index) => {
      const date = new Date(gridStart);
      date.setDate(gridStart.getDate() + index);
      return {
        date,
        isCurrentMonth: date.getMonth() === visibleMonth.getMonth(),
      };
    });
    return days;
  }, [visibleMonth]);

  const parseDurationMinutes = (value?: string) => {
    const match = value?.match(/\d+/);
    return match ? Number(match[0]) : 60;
  };

  const parseTime = (value: string) => {
    const [timePart, periodPart] = value.split(' ');
    const [rawHours, rawMinutes] = timePart.split(':').map((part) => Number(part));
    let hours = Number.isNaN(rawHours) ? 0 : rawHours;
    const minutes = Number.isNaN(rawMinutes) ? 0 : rawMinutes;
    const period = periodPart?.toLowerCase();
    if (period === 'pm' && hours < 12) {
      hours += 12;
    }
    if (period === 'am' && hours === 12) {
      hours = 0;
    }
    return {hours, minutes};
  };

  const buildStartAt = () => {
    if (!selectedDate) return null;
    const start = new Date(selectedDate);
    const {hours, minutes} = parseTime(selectedTime);
    start.setHours(hours, minutes, 0, 0);
    return start;
  };

  const handleSubmit = async () => {
    if (!fullName || !email) {
      setSubmitError(t('submit.invalid'));
      return;
    }
    const startAt = buildStartAt();
    if (!startAt) {
      setSubmitError(t('submit.invalid'));
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    const durationMinutes = parseDurationMinutes(serviceDetails?.duration);
    const endAt = new Date(startAt.getTime() + durationMinutes * 60 * 1000);

    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        customerName: fullName,
        customerEmail: email,
        customerPhone: phone || null,
        branchName: branchLabel ?? bookingData.branches[0]?.label ?? '',
        serviceName: serviceLabel,
        staffId: selectedTherapistId ?? null,
        startAt: startAt.toISOString(),
        endAt: endAt.toISOString(),
        source: 'public',
      }),
    }).catch(() => null);

    if (!response || !response.ok) {
      let reason = '';
      try {
        const payload = await response?.json();
        if (payload?.message) {
          reason = ` (${payload.message})`;
        }
      } catch {
        reason = '';
      }
      setSubmitError(`${t('submit.error')}${reason}`);
      setIsSubmitting(false);
      return;
    }

    setSubmitSuccess(t('submit.success'));
    setIsSubmitting(false);
  };

  useEffect(() => {
    if (!branchLabel || !serviceLabel) {
      setTherapists([]);
      setSelectedTherapistId(null);
      return;
    }
    let isActive = true;
    setTherapistStatus('loading');
    setSelectedTherapistId(null);

    const params = new URLSearchParams({
      branchName: branchLabel,
      serviceName: serviceLabel,
    });

    fetch(`/api/public/therapists?${params.toString()}`)
      .then((response) => (response.ok ? response.json() : Promise.reject(response)))
      .then((data) => {
        if (!isActive) return;
        setTherapists(Array.isArray(data?.items) ? data.items : []);
        setTherapistStatus('idle');
      })
      .catch(() => {
        if (!isActive) return;
        setTherapists([]);
        setTherapistStatus('error');
      });

    return () => {
      isActive = false;
    };
  }, [branchLabel, serviceLabel]);

  return (
    <main className="min-h-screen bg-[#f6f2ea] px-6 py-10 text-neutral-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
        <header className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">
          <span>{t('brand')}</span>
          <Link className="text-[0.7rem] font-semibold" href={`/${locale}`}>
            {t('cancel')}
          </Link>
        </header>

        <section className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.25em] text-neutral-500">
          <span className="font-semibold text-olive-700">{t('steps.service')}</span>
          <span className="h-px w-10 bg-neutral-300" />
          <span>{t('steps.branch')}</span>
          <span className="h-px w-10 bg-neutral-300" />
          <span>{t('steps.schedule')}</span>
          <span className="h-px w-10 bg-neutral-300" />
          <span>{t('steps.staff')}</span>
          <span className="h-px w-10 bg-neutral-300" />
          <span>{t('steps.confirm')}</span>
        </section>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-10">
            <section>
              <h2 className={`${playfair.className} text-2xl`}>{t('service.title')}</h2>
              <p className="mt-2 text-sm text-neutral-600">{t('service.subtitle')}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {bookingData.services.map((service) => {
                  const isActive = service.key === selectedService;
                  return (
                    <button
                      className={`rounded-2xl border p-4 text-left shadow-[0_18px_50px_-45px_rgba(0,0,0,0.35)] ${
                        isActive
                          ? 'border-olive-700 bg-olive-50'
                          : 'border-neutral-200 bg-white'
                      }`}
                      key={service.key}
                      onClick={() => setSelectedService(service.key)}
                      type="button"
                    >
                      <div className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                        {t(`service.items.${service.key}.tag`)}
                      </div>
                      <div className={`${playfair.className} mt-3 text-lg`}>
                        {t(`service.items.${service.key}.title`)}
                      </div>
                      <div className="mt-2 text-xs text-neutral-500">
                        {service.duration} · {service.price}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className={`${playfair.className} text-2xl`}>{t('branch.title')}</h2>
              <p className="mt-2 text-sm text-neutral-600">{t('branch.subtitle')}</p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {bookingData.branches.map((branch) => {
                  const isActive = branch.key === selectedBranch;
                  return (
                    <button
                      className={`rounded-full border px-4 py-2 text-sm ${
                        isActive
                          ? 'border-olive-700 bg-olive-50 text-olive-800'
                          : 'border-neutral-300 text-neutral-700'
                      }`}
                      key={branch.key}
                      onClick={() => setSelectedBranch(branch.key)}
                      type="button"
                    >
                      {branch.label}
                    </button>
                  );
                })}
              </div>
            </section>

            <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]">
              <h2 className={`${playfair.className} text-2xl`}>{t('calendar.title')}</h2>
              <p className="mt-2 text-sm text-neutral-600">{t('calendar.subtitle')}</p>
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-5">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <span>{monthLabel}</span>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <button
                      aria-label={t('calendar.previous')}
                      className="rounded-full border border-neutral-200 px-3 py-1 text-xs"
                      onClick={() =>
                        setVisibleMonth(
                          new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() - 1, 1),
                        )
                      }
                      type="button"
                    >
                      {'<'}
                    </button>
                    <button
                      aria-label={t('calendar.next')}
                      className="rounded-full border border-neutral-200 px-3 py-1 text-xs"
                      onClick={() =>
                        setVisibleMonth(
                          new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 1),
                        )
                      }
                      type="button"
                    >
                      {'>'}
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-neutral-400">
                  {t('calendar.days')
                    .split('|')
                    .map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                </div>
                <div className="mt-3 grid grid-cols-7 gap-2 text-center text-sm text-neutral-700">
                  {calendarDays.map(({date, isCurrentMonth}) => {
                    const startOfToday = new Date();
                    startOfToday.setHours(0, 0, 0, 0);
                    const isPast = date.getTime() < startOfToday.getTime();
                    const isSelected =
                      !!selectedDate && date.toDateString() === selectedDate.toDateString();
                    const isToday = date.toDateString() === startOfToday.toDateString();
                    const baseClasses = isSelected
                      ? 'bg-olive-700 text-white'
                      : isCurrentMonth
                        ? 'text-neutral-700'
                        : 'text-neutral-300';
                    const borderClasses = isToday && !isSelected ? 'border border-olive-300' : '';
                    return (
                      <button
                        aria-pressed={isSelected}
                        className={`rounded-lg px-2 py-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-olive-300 ${baseClasses} ${borderClasses}`}
                        disabled={isPast}
                        key={date.toISOString()}
                        onClick={() => {
                          if (isPast) return;
                          setSelectedDate(date);
                          if (!isCurrentMonth) {
                            setVisibleMonth(
                              new Date(date.getFullYear(), date.getMonth(), 1),
                            );
                          }
                        }}
                        type="button"
                      >
                        {date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            <section>
              <h3 className={`${playfair.className} text-2xl`}>{t('time.title')}</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {bookingData.timeSlots.map((slot) => (
                  <button
                    className={`rounded-full border px-5 py-2 text-sm ${
                      slot === selectedTime
                        ? 'border-olive-700 bg-olive-50 text-olive-800'
                        : 'border-neutral-300 text-neutral-700'
                    }`}
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    type="button"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </section>

            <section>
              <h3 className={`${playfair.className} text-2xl`}>{t('therapist.title')}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {therapistStatus === 'loading' ? (
                  <p className="text-sm text-neutral-500">{t('therapist.loading')}</p>
                ) : null}
                {therapistStatus === 'error' ? (
                  <p className="text-sm text-red-500">{t('therapist.error')}</p>
                ) : null}
                {therapistStatus === 'idle' && therapists.length === 0 ? (
                  <p className="text-sm text-neutral-500">{t('therapist.empty')}</p>
                ) : null}
                {therapistStatus === 'idle' && therapists.length > 0 ? (
                  <button
                    className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                      selectedTherapistId === null
                        ? 'border-olive-700 bg-olive-50'
                        : 'border-neutral-200 bg-white'
                    }`}
                    onClick={() => setSelectedTherapistId(null)}
                    type="button"
                  >
                    <div className="h-14 w-14 rounded-full bg-[linear-gradient(135deg,#cdb9a0,#efe7d7)]" />
                    <div>
                      <div className="text-sm font-semibold text-neutral-900">
                        {t('therapist.any')}
                      </div>
                      <div className="text-xs text-neutral-500">
                        {t('therapist.roleLabel')}
                      </div>
                    </div>
                  </button>
                ) : null}
                {therapists.map((therapist) => {
                  const isActive = therapist.id === selectedTherapistId;
                  return (
                    <button
                      className={`flex items-center gap-4 rounded-2xl border p-4 text-left transition ${
                        isActive
                          ? 'border-olive-700 bg-olive-50'
                          : 'border-neutral-200 bg-white'
                      }`}
                      key={therapist.id}
                      onClick={() => setSelectedTherapistId(therapist.id)}
                      type="button"
                    >
                      <div className="h-14 w-14 rounded-full bg-[linear-gradient(135deg,#bca890,#f1e7d8)]" />
                      <div>
                        <div className="text-sm font-semibold text-neutral-900">
                          {therapist.name}
                        </div>
                        <div className="text-xs text-neutral-500">
                          {t('therapist.roleLabel')}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section>
              <h3 className={`${playfair.className} text-2xl`}>{t('details.title')}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input
                  className="border-b border-neutral-300 bg-transparent pb-3 text-base text-neutral-800 placeholder:text-neutral-400 focus:border-olive-600 focus:outline-none"
                  placeholder={t('details.fullName')}
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
                <input
                  className="border-b border-neutral-300 bg-transparent pb-3 text-base text-neutral-800 placeholder:text-neutral-400 focus:border-olive-600 focus:outline-none"
                  placeholder={t('details.email')}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className="border-b border-neutral-300 bg-transparent pb-3 text-base text-neutral-800 placeholder:text-neutral-400 focus:border-olive-600 focus:outline-none"
                  placeholder={t('details.phone')}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </section>
          </div>

          <aside className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]">
            <h3 className={`${playfair.className} text-2xl`}>{t('summary.title')}</h3>
            <div className="mt-4 space-y-3 text-sm text-neutral-600">
              <div className="flex items-center justify-between">
                <span>{t('summary.service')}</span>
                <span className="font-semibold text-neutral-900">
                  {serviceDetails?.price ?? summary.total}
                </span>
              </div>
              <div className="text-neutral-700">
                {serviceLabel}
                <div className="text-xs text-neutral-500">{summary.duration}</div>
                <div className="text-xs text-neutral-500">{summary.ingredients}</div>
              </div>
              <div className="rounded-xl border border-neutral-200 px-4 py-3 text-xs text-neutral-500">
                {formattedDate} · {selectedTime || summary.time}
              </div>
              <div className="text-xs text-neutral-500">
                {branchLabel ?? bookingData.branches[0]?.label}
              </div>
              <div className="text-xs text-neutral-500">
                {t('summary.with')} {selectedTherapist?.name ?? t('therapist.any')}
              </div>
              <div className="space-y-2 pt-4 text-xs text-neutral-500">
                <div className="flex justify-between">
                  <span>{t('summary.subtotal')}</span>
                  <span>{summary.subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('summary.fee')}</span>
                  <span>{summary.serviceFee}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-neutral-900">
                  <span>{t('summary.total')}</span>
                  <span>{summary.total}</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  className="w-full rounded-full bg-olive-700 px-4 py-3 text-sm font-semibold text-white"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  type="button"
                >
                  {isSubmitting ? t('submit.submitting') : t('summary.payNow')}
                </button>
                <button
                  className="mt-3 w-full rounded-full border border-neutral-300 px-4 py-3 text-sm font-semibold text-neutral-700"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  type="button"
                >
                  {t('summary.payLater')}
                </button>
                {submitError ? (
                  <p className="mt-3 text-xs text-red-500">{submitError}</p>
                ) : null}
                {submitSuccess ? (
                  <p className="mt-3 text-xs text-olive-700">{submitSuccess}</p>
                ) : null}
              </div>
              <p className="pt-3 text-[0.7rem] text-neutral-400">{t('summary.disclaimer')}</p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
