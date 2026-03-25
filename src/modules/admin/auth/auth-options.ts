import type {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

import {prisma} from '@/modules/shared/db/prisma';

const resolveAuthBaseUrl = () => {
  const envUrl = process.env.NEXTAUTH_URL;
  const vercelUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;

  if (envUrl && !envUrl.includes('localhost')) {
    return envUrl;
  }

  return vercelUrl ?? envUrl;
};

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

const providers: NextAuthOptions['providers'] = [
  CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'email'},
        password: {label: 'Password', type: 'password'},
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {email: credentials.email},
        });

        if (!user || user.status !== 'active') {
          return null;
        }

        const isValid = await bcrypt.compare(credentials.password, user.passwordHash);

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          status: user.status,
        };
      },
    }),
];

if (googleClientId && googleClientSecret) {
  providers.push(
    GoogleProvider({
      clientId: googleClientId,
      clientSecret: googleClientSecret,
    }),
  );
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers,
  callbacks: {
    async signIn({user, account}) {
      if (account?.provider !== 'google') {
        return true;
      }

      const email = user?.email;
      if (!email) {
        return false;
      }

      const existing = await prisma.user.findUnique({where: {email}});
      if (existing && (existing.role !== 'customer' || existing.status !== 'active')) {
        return false;
      }

      return true;
    },
    async redirect({url, baseUrl}) {
      const resolvedBaseUrl = resolveAuthBaseUrl() ?? baseUrl;

      if (url.startsWith('/')) {
        return `${resolvedBaseUrl}${url}`;
      }

      try {
        const nextUrl = new URL(url);
        if (nextUrl.origin === baseUrl) {
          return url.replace(baseUrl, resolvedBaseUrl);
        }
      } catch {
        return resolvedBaseUrl;
      }

      return resolvedBaseUrl;
    },
    async jwt({token, user, account}) {
      if (account?.provider === 'google' && user?.email) {
        const email = user.email;
        const existing = await prisma.user.findUnique({where: {email}});

        if (!existing) {
          const passwordHash = await bcrypt.hash(crypto.randomUUID(), 10);
          const created = await prisma.user.create({
            data: {
              email,
              name: user.name ?? email.split('@')[0] ?? 'Customer',
              passwordHash,
              role: 'customer',
              status: 'active',
              authProvider: 'google',
            },
          });

          token.id = created.id;
          token.role = created.role;
          token.status = created.status;
          token.name = created.name;
          token.email = created.email;
          return token;
        }

        if (existing.authProvider !== 'google') {
          await prisma.user.update({
            where: {id: existing.id},
            data: {authProvider: 'google'},
          });
        }

        token.id = existing.id;
        token.role = existing.role;
        token.status = existing.status;
        token.name = existing.name;
        token.email = existing.email;
        return token;
      }

      if (user && 'id' in user) {
        token.id = user.id;
      }
      if (user && 'role' in user) {
        token.role = user.role;
      }
      if (user && 'status' in user) {
        token.status = user.status;
      }
      if (user && 'name' in user) {
        token.name = user.name;
      }
      if (user && 'email' in user) {
        token.email = user.email;
      }
      return token;
    },
    async session({session, token}) {
      if (session.user) {
        session.user.id = token.id as string | undefined;
        session.user.role = token.role as string | undefined;
        session.user.status = token.status as string | undefined;
        session.user.name = token.name as string | undefined;
        session.user.email = token.email as string | undefined;
      }
      return session;
    },
  },
};
