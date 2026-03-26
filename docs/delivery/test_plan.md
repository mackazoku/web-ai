# Test Plan

## Scope
Define verification strategy for implemented features.

## Smoke Test (Quick Verification)
Purpose: 3–5 minute check after deploy to confirm core flows are alive.

Checklist:
- Open `/[locale]/login` and confirm the page loads.
- Verify login screen shows Google sign-in and register link.
- Navigate to `/[locale]/register` and confirm form renders.
- If OAuth configured: start Google sign-in and confirm redirect to callback.

## Execution Tracking
- executor
- executed_at (YYYY-MM-DD HH:mm)
- environment
- result (pass/fail/partial)
- notes

### 2026-03-26 10:30 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Added admin services screen UI; tests not run yet.

### 2026-03-25 12:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Added customer Google login flow; tests not run yet.

### 2026-03-25 12:55 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Added register link on customer login screen; tests not run yet.

### 2026-03-19 23:58 (local)
- executor: TBD
- environment: local build
- result: pass
- notes: `npm run build` succeeded after fixing i18n locale typing.

### 2026-03-19 24:05 (local)
- executor: TBD
- environment: local build
- result: pass
- notes: `npm run build` succeeded after middleware relocation.

### 2026-03-19 24:45 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Public UI changes applied; tests not run yet.

### 2026-03-19 25:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Admin dashboard UI changes applied; tests not run yet.

### 2026-03-20 09:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Admin redirect fix applied; tests not run yet.

### 2026-03-20 09:35 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Admin login callback URL fix applied; tests not run yet.

### 2026-03-20 10:00 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Admin login redirect loop fix applied; tests not run yet.

### 2026-03-20 11:20 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Admin dashboard API + users CRUD added; tests not run yet.

### 2026-03-20 12:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Prisma schema + seed script added; tests not run yet.

### 2026-03-20 12:40 (local)
- executor: TBD
- environment: local + Neon
- result: partial
- notes: Migration applied; seed failed due to DB connection error.

### 2026-03-20 12:55 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Fixed admin users lint warning; pending deploy.

### 2026-03-20 13:15 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Added seed users script; not executed yet.

### 2026-03-20 13:45 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Public home + booking flow expanded; tests not run yet.

### 2026-03-20 14:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Booking selection interactivity added; tests not run yet.

### 2026-03-20 15:30 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Booking date button update applied; tests not run yet.

### 2026-03-20 15:50 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Increased personal details input size; tests not run yet.

### 2026-03-20 16:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Core schema + seed script added; migration and seed not run yet.

### 2026-03-20 16:35 (local + Neon)
- executor: TBD
- environment: local + Neon
- result: pass
- notes: Prisma migration core_models applied; seed:core executed successfully.

### 2026-03-20 17:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Added admin logout action; tests not run yet.

### 2026-03-20 18:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Admin dashboard now reads DB; build/tests not run yet.

### 2026-03-25 19:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Fixed admin session name; build/tests not run yet.

### 2026-03-25 20:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Public booking submission added; build/tests not run yet.

### 2026-03-25 20:30 (local)
- executor: TBD
- environment: local build
- result: pass
- notes: `npm run build` succeeded after booking submission updates.

### 2026-03-25 21:10 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Moved booking_requests_queue assets to public; tests not run.

### 2026-03-25 21:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Applied my_bookings typography; tests not run yet.

### 2026-03-25 22:20 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Updated public calendar picker and admin dashboard fetch; tests not run yet.

### 2026-03-25 23:05 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Added therapist selection from DB and staff-service mapping; tests not run yet.

### 2026-03-25 23:20 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Added booking error detail rendering; tests not run yet.

### 2026-03-25 23:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Fixed admin header name binding; tests not run yet.

### 2026-03-25 23:55 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Updated staff dashboard access and schedule filtering; tests not run yet.

### 2026-03-26 00:15 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Added admin day-view calendar grid positioning; tests not run yet.

### 2026-03-26 00:30 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Fixed admin calendar header spacing; tests not run yet.

### 2026-03-26 00:40 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Widened admin dashboard layout for calendar; tests not run yet.

### 2026-03-26 00:50 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Forced 1-hour booking blocks in admin calendar; tests not run yet.

### 2026-03-26 01:05 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Added admin calendar previous/next day navigation; tests not run yet.

### 2026-03-26 01:15 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Updated calendar header to hourly labels; tests not run yet.

### 2026-03-25 23:55 (local)
- executor: TBD
- environment: local
- result: partial
- notes: Added customer registration flow; tests not run yet.
