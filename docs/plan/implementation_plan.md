# Web AI - Implementation Plan

## 1. Purpose
Define the execution plan after documentation alignment.

## 2. Task Metadata (Mandatory)
Each task must include:
- owner
- status (pending/in_progress/blocked/done)
- last_updated (YYYY-MM-DD)
- doc_impact
- manual_setup_required (yes/no)

## 3. Phases
| phase | feature | status | owner | last_updated | doc_impact | manual_setup_required | notes |
|---|---|---|---|---|---|---|---|
| D0 | Documentation Alignment | done | TBD | 2026-03-19 | requirements, ui_spec, system_design, api_contracts, data_model, brainstorming | no | MVP includes payments, email, multi-branch |
| F0 | MVP Scope Definition | pending | TBD | 2026-03-19 | requirements, ui_spec, implementation_plan | no | break down booking, services, calendar, payments, email, branches |
| F0.1 | Codebase Split (Admin/Public) | done | TBD | 2026-03-19 | system_design, ui_spec, implementation_plan, status_board | no | split app routes into `(public)` and `(admin)` groups |
| F0.2 | Deployment Prep (Vercel) | done | TBD | 2026-03-19 | manual_setup, implementation_plan, status_board | yes | prepare deployment checklist and environment defaults |
| F0.3 | Admin Auth Guard | done | TBD | 2026-03-19 | system_design, implementation_plan, status_board | no | middleware guard for `/[locale]/admin` |
| F0.4 | NextAuth Integration | done | TBD | 2026-03-19 | system_design, api_contracts, data_model, ui_spec, implementation_plan, status_board | yes | credentials auth + role-based guard + admin login |
| F0.5 | UI Docs Split (Admin/User) | done | TBD | 2026-03-19 | ui_spec, implementation_plan, status_board | no | split UI specs and screen folders |
| F1 | Public UI Screens (Home + Booking) | done | TBD | 2026-03-19 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | implement public home, booking flow, and customer profile screens |
| F1.1 | Public Home + Booking Completion | done | TBD | 2026-03-20 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | add branch selector and full booking steps |
| F1.2 | Booking selection UX polish | done | TBD | 2026-03-20 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | improve date selection buttons and selection feedback |
| F1.3 | Booking personal details sizing | done | TBD | 2026-03-20 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | increase input typography and spacing |
| F2 | Admin UI Screens (Dashboard) | done | TBD | 2026-03-19 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | implement admin dashboard layout and widgets |
| F3 | Admin Dashboard Data API (JSON-backed) | done | TBD | 2026-03-20 | system_design, api_contracts, implementation_plan, status_board, coding_log, test_plan | no | add /api/admin/dashboard and wire admin dashboard |
| F4 | Auth DB + Users CRUD | done | TBD | 2026-03-20 | system_design, api_contracts, data_model, requirements, implementation_plan, status_board, manual_setup, coding_log, test_plan | yes | prisma + Neon, user CRUD, role checks |
| F5 | Core data models + seed (branches/services/bookings) | done | TBD | 2026-03-20 | system_design, data_model, implementation_plan, status_board, manual_setup, coding_log, test_plan | yes | add Service/Booking schema and seed scripts |
| F6 | Public booking data from DB | pending | TBD | 2026-03-20 | ui_spec, api_contracts, system_design, implementation_plan, status_board, coding_log, test_plan | no | replace booking fixtures with API-backed branch/service data |
| F7 | Admin dashboard KPIs from DB | done | TBD | 2026-03-20 | ui_spec, api_contracts, system_design, implementation_plan, status_board, coding_log, test_plan | no | compute dashboard stats from bookings/services |
| F8 | Admin logout action | done | TBD | 2026-03-20 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | add sign-out action in admin sidebar |
| F9 | Public booking submission | done | TBD | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, implementation_plan, status_board, coding_log, test_plan | no | create booking via API and show in admin dashboard |
| F10 | Move booking requests screen to public | done | TBD | 2026-03-25 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | rename booking_requests_queue to my_bookings |
| F11 | Public calendar real picker + admin booking sync | done | TBD | 2026-03-25 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | replace static calendar grid with real month picker and ensure admin dashboard reads latest bookings |
| F12 | DB-backed therapist selection | done | TBD | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, data_model, implementation_plan, status_board, manual_setup, coding_log, test_plan | yes | add staff-service mapping, public therapists API, booking payload includes staffId |
| F13 | Admin calendar day view positioning | done | TBD | 2026-03-25 | ui_spec, implementation_plan, status_board, coding_log, test_plan | no | render real time grid and position bookings by start/end times |
| F14 | Customer registration | done | TBD | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, data_model, implementation_plan, status_board, coding_log, test_plan | no | add public registration UI + API, validation, and login redirect |
