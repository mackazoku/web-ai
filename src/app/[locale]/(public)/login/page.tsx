'use client';

import {useEffect, useState} from 'react';
import {useParams, useRouter, useSearchParams} from 'next/navigation';
import Link from 'next/link';
import {signIn} from 'next-auth/react';
import {useTranslations} from 'next-intl';

export default function CustomerLoginPage() {
  const t = useTranslations('Login');
  const params = useParams<{locale: string}>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const fallbackPath = `/${params.locale}/booking`;
  const callbackPath = searchParams.get('callbackUrl') ?? fallbackPath;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  const oauthError = searchParams.get('error');
  const showOauthFallback = Boolean(oauthError);

  useEffect(() => {
    if (!oauthError) {
      return;
    }
    if (oauthError === 'OAuthAccountNotLinked') {
      setError(t('oauthAccountNotLinked'));
      return;
    }
    if (oauthError === 'AccessDenied') {
      setError(t('oauthCancelled'));
      return;
    }
    setError(t('oauthError'));
  }, [oauthError, t]);

  const resolveCallbackUrl = () => {
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    return callbackPath.startsWith('http') ? callbackPath : `${origin}${callbackPath}`;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setIsSubmitting(true);

    const resolvedCallbackUrl = resolveCallbackUrl();

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

  const handleGoogleSignIn = async () => {
    setError('');
    setIsGoogleSubmitting(true);
    const resolvedCallbackUrl = resolveCallbackUrl();
    await signIn('google', {callbackUrl: resolvedCallbackUrl});
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

        <button
          className="flex items-center justify-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:border-neutral-300 disabled:opacity-60"
          disabled={isGoogleSubmitting}
          onClick={handleGoogleSignIn}
          type="button"
        >
          {isGoogleSubmitting ? t('googleLoading') : t('googleButton')}
        </button>

        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
          <span className="h-px flex-1 bg-neutral-200" />
          {t('orDivider')}
          <span className="h-px flex-1 bg-neutral-200" />
        </div>

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
          {showOauthFallback ? (
            <p className="text-xs text-neutral-500">{t('oauthFallback')}</p>
          ) : null}

          <button
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-60"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? t('loading') : t('submit')}
          </button>
        </form>

        <div className="text-center text-sm text-neutral-600">
          {t('registerPrompt')}{' '}
          <Link
            className="font-semibold text-neutral-900 underline-offset-4 hover:underline"
            href={`/${params.locale}/register`}
          >
            {t('registerCta')}
          </Link>
        </div>
      </div>
    </main>
  );
}
