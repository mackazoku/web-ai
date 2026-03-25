'use client';

import {useState} from 'react';
import {useParams, useRouter, useSearchParams} from 'next/navigation';
import {signIn} from 'next-auth/react';
import {useTranslations} from 'next-intl';

export default function AdminLoginPage() {
  const t = useTranslations('AdminLogin');
  const params = useParams<{locale: string}>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackPath = searchParams.get('callbackUrl') ?? `/${params.locale}/admin`;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const resolvedCallbackUrl = callbackPath.startsWith('http')
      ? callbackPath
      : `${origin}${callbackPath}`;

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: resolvedCallbackUrl,
    });

    setIsSubmitting(false);

    if (result?.error) {
      setError(t('invalidCredentials'));
      return;
    }

    router.push(resolvedCallbackUrl);
  };

  return (
    <main className="min-h-screen bg-[#f6f2ea] px-6 py-10 text-neutral-900">
      <div className="mx-auto flex w-full max-w-md flex-col gap-6">
        <header className="rounded-2xl border border-neutral-200 bg-white/80 p-6 shadow-[0_18px_50px_-40px_rgba(0,0,0,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            {t('badge')}
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-neutral-900">{t('title')}</h1>
          <p className="mt-2 text-sm text-neutral-600">{t('subtitle')}</p>
        </header>

        <form
          className="flex flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            {t('emailLabel')}
            <input
              className="rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-neutral-700">
            {t('passwordLabel')}
            <input
              className="rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 focus:border-neutral-400 focus:outline-none"
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </label>

          {error ? <p className="text-sm text-rose-600">{error}</p> : null}

          <button
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? t('loading') : t('submit')}
          </button>
        </form>
      </div>
    </main>
  );
}
