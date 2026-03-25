# Manual Setup

## Purpose
List manual steps required for environments and deployments.

## Checklist
- Environment: dev
  - Owner: TBD
  - Prerequisites: Node.js, database access
  - Steps:
    - Provision Neon Postgres and set `DATABASE_URL`.
    - Run Prisma migrations to create `User`, `Branch`, and related tables.
    - Apply StaffService migration for therapist-service mapping.
    - Seed the first admin user (`npm run seed:admin`).
    - Optional: seed sample users (`npm run seed:users`).
    - Seed core demo data for branches/services/bookings (`npm run seed:core`).
    - Re-run `seed:core` after staff/service updates to refresh therapist mappings.
    - Configure email provider credentials (MVP email notifications).
    - Configure payment provider keys (VNPay/Momo/Stripe).
    - Configure branch timezones and business hours.
    - Set `NEXTAUTH_SECRET` and `NEXTAUTH_URL`.
    - Remove legacy admin seed credentials (`ADMIN_SEED_EMAIL`, `ADMIN_SEED_PASSWORD`) once DB users are live.
  - Verification:
    - Send test email confirmation.
    - Complete a test payment in sandbox.
    - Create booking in each branch timezone.
    - Sign in to `/[locale]/admin/login`.
  - Rollback:
    - Disable email sending and switch to log-only mode.
    - Disable payment provider and fall back to pay-at-spa.
- Environment: prod (Vercel)
  - Owner: TBD
  - Prerequisites: Vercel account, production domain access
  - Steps:
    - Provision Neon Postgres and set `DATABASE_URL` in Vercel.
    - Run Prisma migrations for production.
    - Apply StaffService migration for therapist-service mapping.
    - Seed the first admin user (`npm run seed:admin`).
    - Optional: seed sample users (`npm run seed:users`).
    - Seed core demo data for branches/services/bookings (`npm run seed:core`).
    - Re-run `seed:core` after staff/service updates to refresh therapist mappings.
    - Create Vercel project for `web-ai`.
    - Configure environment variables (auth, database, email, payment).
    - Set production domain and DNS records in Vercel.
    - Enable automatic deployments from `main`.
    - Set `NEXTAUTH_SECRET` and `NEXTAUTH_URL`.
    - Remove legacy admin seed credentials when DB users are live.
  - Verification:
    - Access home page and admin page in production.
    - Run a test booking flow and confirm email delivery.
    - Sign in to `/[locale]/admin/login` in production.
  - Rollback:
    - Revert to previous deployment in Vercel.
    - Disable production domain if critical.
