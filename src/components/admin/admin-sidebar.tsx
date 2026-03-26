'use client';

import {useEffect, useMemo, useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';

import LogoutButton from '@/modules/admin/components/logout-button';

type AdminSidebarProps = {
  locale: string;
  userName?: string | null;
  roleKey?: string | null;
};

type NavItem = {
  key: 'dashboard' | 'users' | 'services' | 'staff' | 'reports';
  href: string;
};

const buildNavItems = (locale: string): NavItem[] => [
  {key: 'dashboard', href: `/${locale}/admin`},
  {key: 'users', href: `/${locale}/admin/users`},
  {key: 'services', href: `/${locale}/admin/services`},
  {key: 'staff', href: `/${locale}/admin`},
  {key: 'reports', href: `/${locale}/admin`},
];

const resolveActiveKey = (pathname: string) => {
  if (pathname.includes('/admin/users')) return 'users';
  if (pathname.includes('/admin/services')) return 'services';
  if (pathname.includes('/admin/staff')) return 'staff';
  if (pathname.includes('/admin/reports')) return 'reports';
  return 'dashboard';
};

export default function AdminSidebar({locale, userName, roleKey}: AdminSidebarProps) {
  const t = useTranslations('Admin');
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = useMemo(() => buildNavItems(locale), [locale]);
  const activeKey = resolveActiveKey(pathname ?? '');
  const brandLabel = t('sidebar.brand');
  const suiteLabel = t('sidebar.suite');
  const brandInitials = brandLabel
    .split(' ')
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const media = window.matchMedia('(max-width: 1024px)');
    const handleChange = () => setCollapsed(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const displayName = userName ?? t('sidebar.user.name');
  const displayRole = roleKey ? t(`sidebar.roles.${roleKey}`) : t('sidebar.user.role');

  return (
    <aside
      className={`sticky top-0 hidden h-screen flex-col bg-[#f4f3f2] py-8 transition-all duration-300 md:flex ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className={`flex items-center justify-between ${collapsed ? 'px-4' : 'px-8'}`}>
        <div className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.35em] text-[#75786e]">
            {collapsed ? brandInitials : suiteLabel}
          </span>
          {!collapsed && (
            <span className="text-2xl italic text-[#536441]">{brandLabel}</span>
          )}
        </div>
        <button
          type="button"
          aria-label={t('sidebar.toggle')}
          className="rounded-full border border-[#e3e2e1] bg-white px-2 py-1 text-xs font-semibold text-[#75786e]"
          onClick={() => setCollapsed((prev) => !prev)}
        >
          {collapsed ? '>' : '<'}
        </button>
      </div>

      <nav className="mt-10 flex-1 space-y-2 text-sm text-[#75786e]">
        {navItems.map((item) => {
          const isActive = activeKey === item.key;
          const label = t(`sidebar.nav.${item.key}`);
          const shortLabel = label.charAt(0).toUpperCase();

          return (
            <Link
              key={item.key}
              href={item.href}
              title={label}
              className={`relative flex items-center gap-3 py-3 transition-all hover:bg-[#e3e2e1] ${
                collapsed ? 'px-4 justify-center' : 'px-8'
              } ${
                isActive
                  ? 'ml-4 rounded-l-full bg-white font-semibold text-[#536441] shadow-sm'
                  : ''
              }`}
            >
              {isActive && (
                <span className="absolute left-0 h-8 w-1 rounded-r-full bg-[#536441]" />
              )}
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#c5c8bc] text-xs font-semibold">
                {collapsed ? shortLabel : shortLabel}
              </span>
              {!collapsed && <span>{label}</span>}
            </Link>
          );
        })}
      </nav>

      <div className={`${collapsed ? 'px-4' : 'px-6'} mt-auto space-y-4`}>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#536441] to-[#9caf87] py-4 text-sm font-medium text-white shadow-[0_32px_32px_-4px_rgba(26,28,28,0.06)] transition-transform hover:scale-[0.98]"
        >
          <span className="text-lg" aria-hidden>
            +
          </span>
          {!collapsed && t('sidebar.newBooking')}
        </button>
        <div className="flex items-center gap-3 border-t border-neutral-200 pt-4 text-sm text-neutral-600">
          <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#cdb9a0,#efe7d7)]" />
          {!collapsed && (
            <div>
              <div className="font-semibold text-neutral-900">{displayName}</div>
              <div className="text-xs text-neutral-500">{displayRole}</div>
            </div>
          )}
        </div>
        {!collapsed && <LogoutButton label={t('sidebar.logout')} locale={locale} />}
      </div>
    </aside>
  );
}
