import {getServerSession} from 'next-auth';

import {authOptions} from '@/modules/admin/auth/auth-options';

export async function requireAdmin() {
  const session = await getServerSession(authOptions);
  const isAdmin = session?.user?.role === 'admin' && session.user.status === 'active';

  if (!isAdmin) {
    return null;
  }

  return session;
}
