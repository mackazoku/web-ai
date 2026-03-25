'use client';

import Link from 'next/link';
import {Playfair_Display} from 'next/font/google';
import {useTranslations} from 'next-intl';

import DialogShell from '@/components/dialog-shell';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

type BookingSuccessDialogProps = {
  open: boolean;
  locale: string;
  onConfirm: () => void;
  onClose?: () => void;
  showFallback?: boolean;
  isRedirecting?: boolean;
};

export default function BookingSuccessDialog({
  open,
  locale,
  onConfirm,
  onClose,
  showFallback = false,
  isRedirecting = false,
}: BookingSuccessDialogProps) {
  const t = useTranslations('Booking');
  return (
    <DialogShell
      open={open}
      onClose={onClose}
      labelledBy="booking-success-title"
      describedBy="booking-success-description"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_24px_70px_-45px_rgba(15,23,42,0.4)]">
        <div className="h-2 w-full bg-gradient-to-r from-olive-600/40 via-olive-700 to-olive-600/40" />
        <div className="px-8 py-10 text-center">
          <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-olive-100 text-olive-700">
            <svg
              aria-hidden="true"
              className="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>

          <h2
            className={`${playfair.className} text-3xl text-neutral-900`}
            id="booking-success-title"
          >
            {t('successDialog.title')}
          </h2>
          <p
            className="mt-4 text-sm text-neutral-600"
            id="booking-success-description"
          >
            {t('successDialog.description')}
          </p>

          {showFallback ? (
            <p className="mt-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
              {t('successDialog.fallbackHint')}
            </p>
          ) : null}

          <div className="mt-8 flex flex-col gap-3">
            {showFallback ? (
              <Link
                className="w-full rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white"
                href={`/${locale}/bookings`}
              >
                {t('successDialog.fallbackCta')}
              </Link>
            ) : (
              <button
                className="w-full rounded-full bg-olive-700 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
                onClick={onConfirm}
                disabled={isRedirecting}
                type="button"
              >
                {t('successDialog.cta')}
              </button>
            )}
            <button
              className="w-full rounded-full border border-neutral-200 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
              onClick={onClose}
              type="button"
            >
              {t('successDialog.dismiss')}
            </button>
          </div>
        </div>
      </div>
    </DialogShell>
  );
}
