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

export default function BookingClient() {
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
  const [therapistStatus, setTherapistStatus] = useState<'idle' | 'loading' | 'error'>(
    'idle',
  );
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

        <section className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="flex flex-col gap-10">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.4)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {t('service.subtitle')}
                  </p>
                  <h2 className={`${playfair.className} text-3xl text-neutral-900`}>
                    {t('service.title')}
                  </h2>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {t('steps.service')}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {bookingData.services.map((service) => (
                  <button
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      selectedService === service.key
                        ? 'border-olive-600 bg-olive-50'
                        : 'border-neutral-200 bg-white'
                    }`}
                    key={service.key}
                    onClick={() => setSelectedService(service.key)}
                    type="button"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                      {t(`service.items.${service.key}.tag`)}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-neutral-900">
                      {t(`service.items.${service.key}.title`)}
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">{service.duration}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.4)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {t('branch.subtitle')}
                  </p>
                  <h2 className={`${playfair.className} text-3xl text-neutral-900`}>
                    {t('branch.title')}
                  </h2>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {t('steps.branch')}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {bookingData.branches.map((branch) => (
                  <button
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      selectedBranch === branch.key
                        ? 'border-olive-600 bg-olive-50'
                        : 'border-neutral-200 bg-white'
                    }`}
                    key={branch.key}
                    onClick={() => setSelectedBranch(branch.key)}
                    type="button"
                  >
                    <p className="text-sm font-semibold text-neutral-900">{branch.label}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.4)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {t('calendar.subtitle')}
                  </p>
                  <h2 className={`${playfair.className} text-3xl text-neutral-900`}>
                    {t('calendar.title')}
                  </h2>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {t('steps.schedule')}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                <div className="flex items-center justify-between text-sm text-neutral-500">
                  <button
                    className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500"
                    onClick={() =>
                      setVisibleMonth(
                        (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
                      )
                    }
                    type="button"
                  >
                    {t('calendar.previous')}
                  </button>
                  <span className="text-sm font-semibold text-neutral-700">{monthLabel}</span>
                  <button
                    className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500"
                    onClick={() =>
                      setVisibleMonth(
                        (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
                      )
                    }
                    type="button"
                  >
                    {t('calendar.next')}
                  </button>
                </div>
                <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs uppercase tracking-[0.25em] text-neutral-400">
                  {t('calendar.days')
                    .split('|')
                    .map((day) => (
                      <span key={day}>{day}</span>
                    ))}
                </div>
                <div className="mt-4 grid grid-cols-7 gap-2 text-center">
                  {calendarDays.map((item) => {
                    const isSelected =
                      selectedDate?.toDateString() === item.date.toDateString();
                    const isPast = item.date < new Date();
                    return (
                      <button
                        className={`rounded-full px-2 py-2 text-xs font-semibold transition ${
                          isSelected
                            ? 'bg-olive-700 text-white'
                            : item.isCurrentMonth
                            ? 'text-neutral-600'
                            : 'text-neutral-300'
                        } ${isPast ? 'cursor-not-allowed opacity-40' : ''}`}
                        disabled={isPast}
                        key={item.date.toISOString()}
                        onClick={() => setSelectedDate(item.date)}
                        type="button"
                      >
                        {item.date.getDate()}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {t('time.title')}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {bookingData.timeSlots.map((slot) => (
                    <button
                      className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                        selectedTime === slot
                          ? 'border-olive-600 bg-olive-50 text-olive-700'
                          : 'border-neutral-200 text-neutral-600'
                      }`}
                      key={slot}
                      onClick={() => setSelectedTime(slot)}
                      type="button"
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.4)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {t('therapist.title')}
                  </p>
                  <h2 className={`${playfair.className} text-3xl text-neutral-900`}>
                    {t('therapist.roleLabel')}
                  </h2>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {t('steps.staff')}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <button
                  className={`rounded-2xl border px-4 py-4 text-left transition ${
                    !selectedTherapistId
                      ? 'border-olive-600 bg-olive-50'
                      : 'border-neutral-200 bg-white'
                  }`}
                  onClick={() => setSelectedTherapistId(null)}
                  type="button"
                >
                  <p className="text-sm font-semibold text-neutral-900">{t('therapist.any')}</p>
                  <p className="mt-2 text-xs text-neutral-500">{t('therapist.reviews')} 158</p>
                </button>
                {therapistStatus === 'loading' ? (
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm text-neutral-500">
                    {t('therapist.loading')}
                  </div>
                ) : null}
                {therapistStatus === 'error' ? (
                  <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-4 text-sm text-rose-600">
                    {t('therapist.error')}
                  </div>
                ) : null}
                {therapistStatus === 'idle' && therapists.length === 0 ? (
                  <div className="rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 text-sm text-neutral-500">
                    {t('therapist.empty')}
                  </div>
                ) : null}
                {therapists.map((therapist) => (
                  <button
                    className={`rounded-2xl border px-4 py-4 text-left transition ${
                      selectedTherapistId === therapist.id
                        ? 'border-olive-600 bg-olive-50'
                        : 'border-neutral-200 bg-white'
                    }`}
                    key={therapist.id}
                    onClick={() => setSelectedTherapistId(therapist.id)}
                    type="button"
                  >
                    <p className="text-sm font-semibold text-neutral-900">
                      {therapist.name}
                    </p>
                    <p className="mt-2 text-xs text-neutral-500">{t('therapist.reviews')} 128</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_24px_70px_-50px_rgba(15,23,42,0.4)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                    {t('details.title')}
                  </p>
                  <h2 className={`${playfair.className} text-3xl text-neutral-900`}>
                    {t('details.fullName')}
                  </h2>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.3em] text-neutral-500">
                  {t('steps.confirm')}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-neutral-700">
                  {t('details.fullName')}
                  <input
                    className="rounded-2xl border border-neutral-200 px-4 py-3 text-base text-neutral-900 focus:border-neutral-400 focus:outline-none"
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder="Jane Doe"
                    value={fullName}
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-neutral-700">
                  {t('details.email')}
                  <input
                    className="rounded-2xl border border-neutral-200 px-4 py-3 text-base text-neutral-900 focus:border-neutral-400 focus:outline-none"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="jane@example.com"
                    type="email"
                    value={email}
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-neutral-700">
                  {t('details.phone')}
                  <input
                    className="rounded-2xl border border-neutral-200 px-4 py-3 text-base text-neutral-900 focus:border-neutral-400 focus:outline-none"
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="(+84) 123 456"
                    value={phone}
                  />
                </label>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]">
              <h2 className={`${playfair.className} text-2xl`}>{t('summary.title')}</h2>
              <div className="mt-4 space-y-3 text-sm text-neutral-600">
                <div className="flex items-center justify-between">
                  <span>{t('summary.service')}</span>
                  <span className="text-neutral-900">{serviceLabel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('summary.with')}</span>
                  <span className="text-neutral-900">
                    {selectedTherapist?.name ?? t('therapist.any')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('branch.title')}</span>
                  <span className="text-neutral-900">{branchLabel}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('calendar.title')}</span>
                  <span className="text-neutral-900">{formattedDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t('time.title')}</span>
                  <span className="text-neutral-900">{selectedTime}</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-500">
                {t('summary.disclaimer')}
              </div>

              {submitError ? (
                <p className="mt-4 text-xs font-semibold text-rose-600">{submitError}</p>
              ) : null}
              {submitSuccess ? (
                <p className="mt-4 text-xs font-semibold text-emerald-600">
                  {submitSuccess}
                </p>
              ) : null}

              <button
                className="mt-6 w-full rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
                disabled={isSubmitting}
                onClick={handleSubmit}
                type="button"
              >
                {isSubmitting ? t('submit.submitting') : t('summary.payNow')}
              </button>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.35)]">
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                {t('summary.total')}
              </p>
              <h3 className={`${playfair.className} mt-2 text-3xl text-neutral-900`}>
                {serviceDetails?.price ?? summary.total}
              </h3>
              <p className="mt-2 text-sm text-neutral-500">{summary.duration}</p>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
