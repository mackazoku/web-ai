import type {NextAuthOptions} from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

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

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
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
  ],
  callbacks: {
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
    async jwt({token, user}) {
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
