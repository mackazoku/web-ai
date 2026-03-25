'use client';

import {useState} from 'react';
import {useTranslations} from 'next-intl';

import {useUiStore} from '@/stores/ui-store';

export default function HomeActions() {
  const t = useTranslations('Home');
  const [count, setCount] = useState(0);
  const {isSidebarOpen, toggleSidebar} = useUiStore();

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="text-sm font-semibold text-neutral-600">
          {t('counterLabel')}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <div className="text-3xl font-bold text-neutral-900">{count}</div>
          <button
            className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white"
            onClick={() => setCount((value) => value + 1)}
            type="button"
          >
            {t('cta')}
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
        <div className="text-sm font-semibold text-neutral-600">
          {t('toggleLabel')}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <div className="text-sm text-neutral-900">
            {isSidebarOpen ? t('statusOn') : t('statusOff')}
          </div>
          <button
            className="rounded-lg border border-neutral-900 px-4 py-2 text-sm font-semibold text-neutral-900"
            onClick={toggleSidebar}
            type="button"
          >
            {t('cta')}
          </button>
        </div>
      </div>
    </div>
  );
}
