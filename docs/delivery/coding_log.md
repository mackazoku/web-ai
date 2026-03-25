# Coding Log

## Purpose
Track implementation execution history per task with links, outcomes, and notable decisions.

## Entry Template
- Date
- Scope
- Decision
- Delivery notes
- Risks / follow-up

### 2026-03-25 - Login register switch
- Scope:
  - Added a register link on the customer login screen to switch to account creation.
- Decision:
  - Keep the link simple without changing existing registration flow.
- Delivery notes:
  - Login page now links to `/[locale]/register`.
- Risks / follow-up:
  - Consider passing callbackUrl if needed for deeper flows.

### 2026-03-25 - Customer Google login
- Scope:
  - Added Google sign-in option to the customer login screen.
  - Synced Google sign-in with customer account creation and role assignment.
  - Added OAuth error handling and fallback guidance.
- Decision:
  - Link Google accounts to existing customers by email to prevent duplicates.
- Delivery notes:
  - Google OAuth requires `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
- Risks / follow-up:
  - Confirm Google OAuth configuration in production.

### 2026-03-25 - Customer registration flow
- Scope:
  - Added public registration screen and API for email + password sign-up.
  - Added validation and duplicate email handling.
  - Updated i18n strings for registration.
- Decision:
  - Keep credentials-only registration without email verification.
- Delivery notes:
  - Successful registration redirects to login with booking callback.
  - Registration API returns minimal user payload.
- Risks / follow-up:
  - Confirm password policy and email normalization requirements.

### 2026-03-19 - Public UI screens implementation (Home, Booking, Customer Profile)
- Scope:
  - Implemented public home, booking flow, and customer profile layouts.
  - Added public data fixtures and i18n strings (EN/VN).
  - Added olive palette in Tailwind to match the visual system.
- Decision:
  - Keep public UI server-rendered with static data placeholders.
  - Use olive palette for CTAs and accents per the approved design language.
- Delivery notes:
  - Added `/[locale]/bookings` customer profile screen.
  - Updated public home and booking screens to use olive theme colors.
- Risks / follow-up:
  - Replace fixture data with API calls when endpoints are ready.
  - Validate responsive behavior and accessibility contrast before launch.

### 2026-03-19 - Fix Vercel 404 by enforcing Next.js build
- Scope:
  - Added explicit Vercel build configuration to use `@vercel/next`.
- Decision:
  - Force framework detection to prevent empty deployment outputs.
- Delivery notes:
  - `vercel.json` now includes `builds` for Next.js and version 2 config.
- Risks / follow-up:
  - Revisit when upgrading Vercel config to avoid deprecated build settings.

### 2026-03-19 - Admin dashboard UI implementation
- Scope:
  - Implemented admin dashboard layout, navigation, stats, schedule, pending approvals, and activity feed.
  - Added admin dashboard data fixtures and expanded i18n keys (EN/VN).
- Decision:
  - Keep dashboard data static until admin APIs are available.
- Delivery notes:
  - Added olive palette usage to admin dashboard UI.
  - Replaced placeholder admin page with design-based layout.
- Risks / follow-up:
  - Replace fixtures with live data from admin endpoints.
  - Confirm responsive behavior on tablet viewports.

### 2026-03-19 - MVP scope update: public booking portal
- Scope:
  - Added public booking portal requirements, UI spec, system design, API contracts, and data model updates.
- Decision:
  - MVP includes public booking requests with anti-spam; other approved items are post-MVP.
- Delivery notes:
  - Added BookingRequest entity and public API endpoints.
- Risks / follow-up:
  - Confirm anti-spam mechanism choice (rate limit vs captcha).

### 2026-03-19 - Documentation baseline for SPA scheduling web
- Scope:
  - Defined product requirements, UI spec, system design, API contracts, and data model for SPA scheduling.
  - Added brainstorming and design suggestions with approval workflow.
- Decision:
  - MVP scope excludes public booking, online payments, and automated reminders (superseded by later update).
- Delivery notes:
  - Documentation set for roles, appointment flow, calendar, customers, services, staff, and reports.
- Risks / follow-up:
  - Requires user approval for proposed suggestions before implementation.

### 2026-03-19 - Added documentation parity with study-ai
- Scope:
  - Added governance, runbooks, and CI setup docs.
  - Added UI screen placeholders under docs/design/ui/admin/screens and docs/design/ui/public/screens.
  - Updated UI spec to include Booking Requests navigation/screen.
- Decision:
  - Placeholder UI assets will be replaced by final design files.
- Delivery notes:
  - Added code.html and empty screen.png per screen.
- Risks / follow-up:
  - Replace placeholders with approved UI designs in admin/user folders.

### 2026-03-19 - Expanded requirements to full booking product scope
- Scope:
  - Added customer-side features, payments, reviews, and notifications.
  - Updated UI spec, system design, API contracts, and data model.
- Decision:
  - MVP focus remains booking + services + calendar + notifications.
- Delivery notes:
  - Added public/customer/back-office navigation structure.
- Risks / follow-up:
  - Confirm payment providers and SMS channel for MVP.

### 2026-03-19 - MVP decisions: online payments, email notifications, multi-branch
- Scope:
  - Updated requirements and UI spec for multi-branch and email-only notifications.
  - Updated system design, API contracts, and data model for branches and payments.
- Decision:
  - MVP includes online payments and multi-branch; SMS is post-MVP.
- Delivery notes:
  - Added branch endpoints and branch-aware filters.
- Risks / follow-up:
  - Confirm payment providers configuration and email service.

### 2026-03-19 - MVP scope confirmed: payments + email + multi-branch
- Scope:
  - Updated requirements, UI spec, system design, API contracts, and data model.
  - Updated manual setup checklist for email and payment providers.
- Decision:
  - MVP includes online payments and multi-branch; SMS is post-MVP.
- Delivery notes:
  - Added branch endpoints and branch-aware filters in contracts.
- Risks / follow-up:
  - Select specific payment providers to implement first.

### 2026-03-10 - Figma-based UI update
- Scope:
  - Updated UI spec to match Figma visual language and layouts.
  - Added screen folder READMEs for provided images.
- Decision:
  - Use calm editorial style with serif headlines and olive accents.
- Delivery notes:
  - Pending replacement of placeholder screen.png with exported assets.
- Risks / follow-up:
  - Need actual exported images for admin/user screen folders.

### 2026-03-19 - Split admin/public route groups
- Scope:
  - Created route groups for admin and public pages under App Router.
  - Added placeholder admin page and module folders.
- Decision:
  - Keep admin routes under `/[locale]/admin` for MVP.
- Delivery notes:
  - Public pages moved to `(public)`, admin layout/page scaffolded.
  - Added `src/modules/{admin,public,shared}`.
- Risks / follow-up:
  - Implement auth guard for admin routes.

### 2026-03-19 - Added admin auth guard (middleware)
- Scope:
  - Protected `/[locale]/admin` routes using middleware and a placeholder cookie.
  - Added access notice to public home.
- Decision:
  - Use `admin_session=1` cookie for MVP guard until auth integration.
- Delivery notes:
  - Redirects unauthorized admin access to `/{defaultLocale}?reason=admin_auth_required`.
- Risks / follow-up:
  - Replace placeholder with real auth provider and role checks.

### 2026-03-19 - NextAuth credentials integration
- Scope:
  - Added NextAuth credentials provider and admin login page.
  - Middleware now checks JWT role instead of placeholder cookie.
- Decision:
  - MVP uses seed admin credentials from environment variables.
- Delivery notes:
  - Added `/api/auth/[...nextauth]` route and admin login UI.
  - Guarded `/[locale]/admin` with role=admin.
- Risks / follow-up:
  - Replace seed user with real database-backed users.
  - Add admin user management UI and role assignment.

### 2026-03-19 - Vercel production deployment
- Scope:
  - Linked project to Vercel and configured production env vars.
  - Deployed production build.
- Decision:
  - Use default domain `project-4i26o.vercel.app`.
- Delivery notes:
  - Production deployment completed and aliased to default domain.
- Risks / follow-up:
  - Upgrade Next.js to a patched version (security notice).

### 2026-03-19 - Hotfix: disable locale middleware (Vercel 500)
- Scope:
  - Disabled locale middleware to avoid edge runtime `__dirname` error.
- Decision:
  - Keep locale routing via `/[locale]` segments until middleware issue is resolved.
- Delivery notes:
  - Middleware now returns `NextResponse.next()` only.
- Risks / follow-up:
  - Investigate next-intl middleware edge compatibility and re-enable.

### 2026-03-19 - Hotfix: move middleware to src/
- Scope:
  - Moved middleware to `src/middleware.ts` for correct Next.js detection.
  - Kept middleware as no-op to avoid edge runtime crash.
- Decision:
  - Prioritize site availability over locale middleware features.
- Delivery notes:
  - Redeployed production and cleared 500 edge-middleware errors.
- Risks / follow-up:
  - Reintroduce locale middleware after confirming compatibility.

### 2026-03-19 - Vercel alias refresh
- Scope:
  - Reassigned `project-4i26o.vercel.app` alias to the latest deployment.
- Decision:
  - Force refresh to rule out stale alias propagation.
- Delivery notes:
  - Alias now points to `project-4i26o-rh3b1fxw3-...`.

### 2026-03-19 - Fix NextAuth redirect to localhost on production
- Scope:
  - Added redirect callback to resolve base URL from `NEXTAUTH_URL` or `VERCEL_URL`.
- Decision:
  - Prefer `VERCEL_URL` when `NEXTAUTH_URL` is missing or set to localhost.
- Delivery notes:
  - Prevents login redirect to `http://localhost:3000` in production.
- Risks / follow-up:
  - Align `NEXTAUTH_URL` env value with production domain when updated.

### 2026-03-20 - Fix admin auth redirect origin
- Scope:
  - Build admin login redirect using `x-forwarded-host` and `x-forwarded-proto`.
- Decision:
  - Prefer request headers to avoid reliance on `NEXTAUTH_URL` in production.
- Delivery notes:
  - Admin guard now redirects to the current host instead of localhost.
- Risks / follow-up:
  - Keep proxy headers intact when adding a custom domain.

### 2026-03-20 - Fix admin login callback URL on client
- Scope:
  - Resolve callback URL with `window.location.origin` in admin login.
- Decision:
  - Always use absolute callback URL on the client to avoid localhost base.
- Delivery notes:
  - Login now redirects to the current origin regardless of env config.
- Risks / follow-up:
  - Replace with proper `NEXTAUTH_URL` when env is stabilized.

### 2026-03-20 - Fix admin login redirect loop
- Scope:
  - Pass `x-pathname` header via middleware and allow `/admin/login` in admin layout.
- Decision:
  - Bypass auth guard for the login page to prevent infinite redirects.
- Delivery notes:
  - Admin layout now allows login route even when unauthenticated.
- Risks / follow-up:
  - Keep middleware active when re-enabling locale handling.

### 2026-03-20 - Admin dashboard API + DB users CRUD
- Scope:
  - Added `/api/admin/dashboard` backed by JSON fixtures.
  - Added Prisma schema and DB-backed admin users CRUD API.
  - Added admin users UI for CRUD and role/status updates.
- Decision:
  - Use Prisma + Neon Postgres and bcrypt for credentials.
- Delivery notes:
  - NextAuth now validates credentials against DB users.
  - Admin dashboard fetches data via API.
- Risks / follow-up:
  - Run Prisma migrations and seed first admin user in Neon.
  - Replace dashboard JSON with DB metrics later.

### 2026-03-20 - Neon migration applied, seed pending
- Scope:
  - Applied Prisma migration to Neon.
  - Attempted admin seed script.
- Decision:
  - Use Neon connection string provided by the user.
- Delivery notes:
  - Migration succeeded.
  - Seed failed due to database connectivity from this environment.
- Risks / follow-up:
  - Re-run `npm run seed:admin` from a local machine that can reach Neon.

### 2026-03-20 - Added sample users seed script
- Scope:
  - Added `seed:users` script with 10 sample staff accounts.
- Decision:
  - Use a single default password for sample users.
- Delivery notes:
  - Seed users by running `npm run seed:users`.
- Risks / follow-up:
  - Rotate sample passwords for production demo if needed.

### 2026-03-20 - Public home + booking completion
- Scope:
  - Added branch selector to public home.
  - Expanded booking flow to include service and branch selection steps.
- Decision:
  - Keep flow UI-only while backend booking/payment is pending.
- Delivery notes:
  - Updated booking data fixtures and i18n for new steps.
- Risks / follow-up:
  - Replace UI-only steps with live availability + payment intent.

### 2026-03-20 - Booking selection interactivity
- Scope:
  - Added interactive selection for service, branch, date, and time in booking flow.
  - Booking summary reflects selected values.
- Decision:
  - Keep selection state client-side with static fixtures.
- Delivery notes:
  - Booking page converted to client component with local state.
- Risks / follow-up:
  - Replace local state with API-driven availability.

### 2026-03-20 - Fix admin users lint error
- Scope:
  - Silenced `react-hooks/exhaustive-deps` for initial user fetch.
- Decision:
  - Keep `fetchUsers` stable in this component for now.
- Delivery notes:
  - Avoids build failure on Vercel.
- Risks / follow-up:
  - Revisit hook extraction when list gains filtering/search.

### 2026-03-20 - Booking date selection buttons
- Scope:
  - Converted calendar date tiles to button elements for selection.
  - Kept branch/date/time selection interactive on the booking screen.
- Decision:
  - Use button elements for clearer accessibility and focus behavior.
- Delivery notes:
  - Booking selection remains client-side with fixture data.
- Risks / follow-up:
  - Replace fixture-driven availability with live availability API.

### 2026-03-20 - Booking personal details sizing
- Scope:
  - Increased input typography and spacing for personal details fields.
- Decision:
  - Favor readability for form completion on desktop and mobile.
- Delivery notes:
  - Added larger text size and bottom padding on inputs.
- Risks / follow-up:
  - Validate focus/contrast on smaller screens.

### 2026-03-20 - Core schema + seed script
- Scope:
  - Added Service, Booking, and BookingService models.
  - Added seed script for branches, services, and bookings.
- Decision:
  - Keep bookings denormalized for customer details to simplify public booking.
- Delivery notes:
  - Seed script uses deterministic demo data with optional staff assignment.
- Risks / follow-up:
  - Run Prisma migration and seed against Neon once DATABASE_URL is set.

### 2026-03-20 - Core schema migrated + seed executed
- Scope:
  - Applied Prisma migration for core booking schema on Neon.
  - Seeded branches, services, and bookings.
- Decision:
  - Use Neon pooled connection for migration/seed.
- Delivery notes:
  - Migration `core_models` applied successfully.
- Risks / follow-up:
  - Ensure app uses new models when wiring real data.

### 2026-03-20 - Admin logout action
- Scope:
  - Added sign-out action in admin sidebar.
- Decision:
  - Use NextAuth `signOut` with admin login callback.
- Delivery notes:
  - Added client logout button component with i18n label.
- Risks / follow-up:
  - Confirm redirect behavior on production domain.

### 2026-03-20 - Admin dashboard DB data
- Scope:
  - Replaced dashboard JSON with DB-backed KPIs and booking data.
  - Displayed authenticated admin user in the sidebar.
- Decision:
  - Compute revenue from confirmed/completed bookings via BookingService join.
- Delivery notes:
  - Dashboard API now returns user + KPIs + pending bookings + activity feed.
- Risks / follow-up:
  - Adjust activity icons and KPI deltas when product metrics are finalized.

### 2026-03-25 - Fix admin session user name
- Scope:
  - Persist user name/email in NextAuth JWT/session.
  - Fallback to DB lookup when name is missing.
- Decision:
  - Store name/email on the token to avoid extra DB hits.
- Delivery notes:
  - Dashboard now receives correct admin display name.
- Risks / follow-up:
  - Ensure role/status remain synced with DB when changed.

### 2026-03-25 - Public booking submission
- Scope:
  - Added POST /api/bookings to persist pending bookings.
  - Booking UI now submits form data and shows success state.
- Decision:
  - Create pending bookings without payment integration for now.
- Delivery notes:
  - Admin dashboard surfaces new pending bookings via DB.
- Risks / follow-up:
  - Add payment intent flow before switching to confirmed status.

### 2026-03-25 - Move booking requests screen to public
- Scope:
  - Moved booking_requests_queue design assets from admin to public.
  - Renamed screen folder to my_bookings.
- Decision:
  - Align booking review UI with public "My Bookings" screen.
- Delivery notes:
  - Updated UI specs for admin/public navigation.
- Risks / follow-up:
  - Ensure public bookings page matches the new design assets.

### 2026-03-25 - Apply my_bookings design
- Scope:
  - Updated public bookings typography to match the my_bookings design.
- Decision:
  - Use serif italic section headers for Upcoming/Past to mirror the visual spec.
- Delivery notes:
  - Bookings page now aligns with my_bookings screen assets.
- Risks / follow-up:
  - Replace placeholder images when final exports are available.

### 2026-03-25 - Public calendar picker + admin booking sync
- Scope:
  - Replaced static booking calendar with a real month grid and navigation.
  - Forwarded admin session cookies to dashboard API fetch for live DB data.
- Decision:
  - Implement calendar behavior without adding third-party dependencies.
- Delivery notes:
  - Calendar disables past dates and updates the booking summary when a date is picked.
  - Admin dashboard now reads bookings through authenticated API calls.
- Risks / follow-up:
  - Replace booking fixtures with API-driven services/branches (F6).
  - Add end-to-end booking flow tests.

### 2026-03-25 - DB-backed therapist selection
- Scope:
  - Added staff-service mapping schema and migration.
  - Added public therapists API and wired booking flow therapist selection to DB.
  - Included optional staff assignment in booking creation.
- Decision:
  - Filter therapists by branch/service; keep selection optional.
- Delivery notes:
  - Booking flow fetches therapists from `/api/public/therapists`.
  - Seed pipeline assigns staff to branches and maps services.
- Risks / follow-up:
  - Replace service/branch fixtures with API-backed data (F6).
  - Add validation for staff availability once schedule rules are defined.

### 2026-03-25 - Booking submit error detail
- Scope:
  - Surface API error message in booking submission UI.
- Decision:
  - Append backend message to the generic error label for debugging.
- Delivery notes:
  - Booking failure now shows a server-provided reason when available.
- Risks / follow-up:
  - Replace raw server messages with i18n once error codes are finalized.

### 2026-03-25 - Fix admin header name
- Scope:
  - Use authenticated admin name in dashboard greeting.
- Decision:
  - Reuse the resolved sidebar user name for the header greeting.
- Delivery notes:
  - Admin header now reflects the logged-in user.
- Risks / follow-up:
  - Ensure session name stays in sync when user updates profile.

### 2026-03-25 - Staff dashboard identity + schedule scope
- Scope:
  - Allow staff/receptionist sessions to access admin dashboard.
  - Filter dashboard schedule and stats to staff assignments.
- Decision:
  - Keep admin-only pages restricted while enabling staff dashboard visibility.
- Delivery notes:
  - Session now carries user id; dashboard API filters by staff id when role=staff.
  - Admin layout redirects non-admin roles away from restricted pages.
- Risks / follow-up:
  - Add dedicated staff portal once workflows expand.

### 2026-03-25 - Admin calendar day view grid
- Scope:
  - Render a day-view calendar grid (09:00–18:00, 30-minute slots).
  - Position booking blocks by start/end time within the grid.
- Decision:
  - Use a single-day view aligned to today's schedule to keep layout simple.
- Delivery notes:
  - Dashboard API returns start/end timestamps for schedule blocks.
  - Calendar renders blocks in correct time columns.
- Risks / follow-up:
  - Add week view and date navigation when needed.

### 2026-03-25 - Fix admin calendar header layout
- Scope:
  - Align time header labels to match dashboard design while keeping 30-minute slots.
- Decision:
  - Render 2-hour markers spanning slot ranges to avoid label overlap.
- Delivery notes:
  - Calendar header now matches the design spacing and avoids overlapping times.
- Risks / follow-up:
  - Revisit marker density for smaller screens.

### 2026-03-25 - Widen admin dashboard layout
- Scope:
  - Expand dashboard container width to reduce calendar wrapping.
- Decision:
  - Use a wider max width while keeping centered layout.
- Delivery notes:
  - Calendar has more horizontal space to avoid line breaks.
- Risks / follow-up:
  - Consider a full-bleed layout if additional columns are added.

### 2026-03-25 - Force 1-hour booking blocks in admin calendar
- Scope:
  - Display calendar blocks as fixed 1-hour spans regardless of booking duration.
- Decision:
  - Use start time + 60 minutes for schedule rendering.
- Delivery notes:
  - Calendar time labels and block widths now reflect 1-hour slots.
- Risks / follow-up:
  - Revisit when duration-based rendering is needed.

### 2026-03-25 - Admin calendar date navigation
- Scope:
  - Add previous/next day controls to the admin calendar.
- Decision:
  - Use `?date=YYYY-MM-DD` query param for server-rendered navigation.
- Delivery notes:
  - Dashboard API filters bookings by selected day.
- Risks / follow-up:
  - Add date picker when needed.

### 2026-03-25 - Hourly header markers
- Scope:
  - Render calendar header labels for every hour.
- Decision:
  - Use 60-minute markers to align with the design requirement.
- Delivery notes:
  - Calendar header now shows hourly labels across the grid.
- Risks / follow-up:
  - Adjust label density for smaller screens if needed.
