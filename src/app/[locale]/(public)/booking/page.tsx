import {redirect} from 'next/navigation';
import {getServerSession} from 'next-auth';

import {authOptions} from '@/modules/admin/auth/auth-options';
import BookingClient from './booking-client';

type BookingPageProps = {
  params: {locale: string};
};

export default async function BookingPage({params}: BookingPageProps) {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user || user.role !== 'customer' || user.status !== 'active') {
    redirect(`/${params.locale}/login?callbackUrl=/${params.locale}/booking`);
  }

  return <BookingClient />;
}
