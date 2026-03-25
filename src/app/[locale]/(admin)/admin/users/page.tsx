'use client';

import {useEffect, useMemo, useState} from 'react';
import {useTranslations} from 'next-intl';

type UserRecord = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  role: string;
  status: string;
  branchId?: string | null;
  notes?: string | null;
  createdAt?: string;
};

const emptyForm = {
  name: '',
  email: '',
  phone: '',
  role: 'staff',
  status: 'active',
  branchId: '',
  notes: '',
  password: '',
};

export default function AdminUsersPage() {
  const t = useTranslations('AdminUsers');
  const [users, setUsers] = useState<UserRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({...emptyForm});
  const [editingId, setEditingId] = useState<string | null>(null);
  const isEditing = useMemo(() => Boolean(editingId), [editingId]);

  const fetchUsers = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/admin/users', {cache: 'no-store'});
      if (!response.ok) {
        throw new Error('fetch_failed');
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(t('errors.load'));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetForm = () => {
    setForm({...emptyForm});
    setEditingId(null);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    const payload = {
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      role: form.role,
      status: form.status,
      branchId: form.branchId || null,
      notes: form.notes || null,
      password: form.password || undefined,
    };

    const response = await fetch(
      isEditing ? `/api/admin/users/${editingId}` : '/api/admin/users',
      {
        method: isEditing ? 'PATCH' : 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      setError(t('errors.save'));
      return;
    }

    resetForm();
    await fetchUsers();
  };

  const handleEdit = (user: UserRecord) => {
    setEditingId(user.id);
    setForm({
      name: user.name ?? '',
      email: user.email ?? '',
      phone: user.phone ?? '',
      role: user.role ?? 'staff',
      status: user.status ?? 'active',
      branchId: user.branchId ?? '',
      notes: user.notes ?? '',
      password: '',
    });
  };

  const handleDisable = async (id: string) => {
    setError('');
    const response = await fetch(`/api/admin/users/${id}`, {method: 'DELETE'});
    if (!response.ok) {
      setError(t('errors.disable'));
      return;
    }
    await fetchUsers();
  };

  return (
    <main className="min-h-screen bg-[#f6f2ea] px-6 py-10 text-neutral-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">{t('title')}</h1>
          <p className="text-sm text-neutral-600">{t('subtitle')}</p>
        </header>

        <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">{t('form.title')}</h2>
          <form className="mt-4 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2 text-sm">
              {t('form.name')}
              <input
                className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                onChange={(event) => setForm((prev) => ({...prev, name: event.target.value}))}
                required
                value={form.name}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              {t('form.email')}
              <input
                className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                onChange={(event) => setForm((prev) => ({...prev, email: event.target.value}))}
                required
                type="email"
                value={form.email}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              {t('form.phone')}
              <input
                className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                onChange={(event) => setForm((prev) => ({...prev, phone: event.target.value}))}
                value={form.phone}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              {t('form.branch')}
              <input
                className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                onChange={(event) => setForm((prev) => ({...prev, branchId: event.target.value}))}
                value={form.branchId}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              {t('form.role')}
              <select
                className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                onChange={(event) => setForm((prev) => ({...prev, role: event.target.value}))}
                value={form.role}
              >
                <option value="admin">{t('roles.admin')}</option>
                <option value="receptionist">{t('roles.receptionist')}</option>
                <option value="staff">{t('roles.staff')}</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm">
              {t('form.status')}
              <select
                className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                onChange={(event) => setForm((prev) => ({...prev, status: event.target.value}))}
                value={form.status}
              >
                <option value="active">{t('status.active')}</option>
                <option value="disabled">{t('status.disabled')}</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm md:col-span-2">
              {t('form.notes')}
              <textarea
                className="min-h-[90px] rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                onChange={(event) => setForm((prev) => ({...prev, notes: event.target.value}))}
                value={form.notes}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              {t('form.password')}
              <input
                className="rounded-lg border border-neutral-200 px-3 py-2 text-sm"
                onChange={(event) => setForm((prev) => ({...prev, password: event.target.value}))}
                type="password"
                value={form.password}
              />
            </label>
            <div className="flex items-end gap-3 md:col-span-2">
              <button
                className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white"
                type="submit"
              >
                {isEditing ? t('form.update') : t('form.create')}
              </button>
              {isEditing ? (
                <button
                  className="rounded-lg border border-neutral-300 px-4 py-2 text-sm font-semibold text-neutral-700"
                  onClick={resetForm}
                  type="button"
                >
                  {t('form.cancel')}
                </button>
              ) : null}
            </div>
          </form>
          {error ? <p className="mt-3 text-sm text-rose-600">{error}</p> : null}
        </section>

        <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">{t('list.title')}</h2>
            <button
              className="rounded-lg border border-neutral-300 px-3 py-2 text-xs font-semibold text-neutral-600"
              onClick={fetchUsers}
              type="button"
            >
              {t('list.refresh')}
            </button>
          </div>

          {loading ? (
            <p className="mt-4 text-sm text-neutral-500">{t('list.loading')}</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-neutral-200 text-left text-xs uppercase tracking-[0.2em] text-neutral-400">
                  <tr>
                    <th className="pb-2">{t('list.columns.name')}</th>
                    <th className="pb-2">{t('list.columns.email')}</th>
                    <th className="pb-2">{t('list.columns.role')}</th>
                    <th className="pb-2">{t('list.columns.status')}</th>
                    <th className="pb-2">{t('list.columns.branch')}</th>
                    <th className="pb-2">{t('list.columns.actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr className="border-b border-neutral-100" key={user.id}>
                      <td className="py-3 font-semibold text-neutral-900">{user.name}</td>
                      <td className="py-3 text-neutral-600">{user.email}</td>
                      <td className="py-3 text-neutral-600">{t(`roles.${user.role}`)}</td>
                      <td className="py-3 text-neutral-600">{t(`status.${user.status}`)}</td>
                      <td className="py-3 text-neutral-600">{user.branchId ?? '-'}</td>
                      <td className="py-3">
                        <div className="flex flex-wrap gap-2">
                          <button
                            className="rounded-lg border border-neutral-300 px-3 py-1 text-xs font-semibold text-neutral-700"
                            onClick={() => handleEdit(user)}
                            type="button"
                          >
                            {t('list.edit')}
                          </button>
                          <button
                            className="rounded-lg border border-neutral-300 px-3 py-1 text-xs font-semibold text-rose-600"
                            onClick={() => handleDisable(user.id)}
                            type="button"
                          >
                            {t('list.disable')}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {!users.length ? (
                <p className="mt-4 text-sm text-neutral-500">{t('list.empty')}</p>
              ) : null}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
