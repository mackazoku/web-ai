# Quickstart & Manual Setup

## Development
1. Set `DATABASE_URL`, `NEXTAUTH_SECRET`, `NEXTAUTH_URL`.
2. Run Prisma migrations:
   - `npx prisma migrate deploy`
3. Generate Prisma client:
   - `npx prisma generate`
4. Seed data:
   - `npm run seed:admin`
   - `npm run seed:users` (optional)
   - `npm run seed:core`

## Production (Vercel)
1. Configure environment variables in Vercel.
2. Run migrations on production DB.
3. Seed admin + core data.
4. Verify admin login and booking flow.

## Verification
- Create a public booking and confirm it appears in admin dashboard.
- Log in as staff and confirm schedule filtering.
