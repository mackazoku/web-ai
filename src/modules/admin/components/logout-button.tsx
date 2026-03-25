'use client';

import {signOut} from 'next-auth/react';

type LogoutButtonProps = {
  label: string;
  locale: string;
};

export default function LogoutButton({label, locale}: LogoutButtonProps) {
  const handleLogout = async () => {
    await signOut({callbackUrl: `/${locale}/admin/login`});
  };

  return (
    <button
      className="mt-4 w-full rounded-2xl border border-neutral-200 px-4 py-2 text-sm font-semibold text-neutral-600 transition hover:border-olive-300 hover:text-olive-700"
      onClick={handleLogout}
      type="button"
    >
      {label}
    </button>
  );
}
