# Status Board

## Purpose
Fast snapshot of delivery status for active phases.

## Fields
- phase
- owner
- status
- last_updated
- doc_impact
- manual_setup_required
- notes

## Current Snapshot
| phase | owner | status | last_updated | doc_impact | manual_setup_required | notes |
|---|---|---|---|---|---|---|
| D0 Documentation Alignment | TBD | done | 2026-03-19 | requirements, design, plan, brainstorming | no | MVP includes payments + email + multi-branch |
| F0 MVP Scope Definition | TBD | pending | 2026-03-19 | requirements, design, plan | no | define tasks for booking + payments + email + branches |
| F0.1 Codebase Split (Admin/Public) | TBD | done | 2026-03-19 | system_design, ui_spec, plan | no | separate route groups for admin vs public |
| F0.2 Deployment Prep (Vercel) | TBD | done | 2026-03-19 | manual_setup, plan | yes | prepare production checklist and defaults |
| F0.3 Admin Auth Guard | TBD | done | 2026-03-19 | system_design, plan | no | protect `/[locale]/admin` via middleware |
| F0.4 NextAuth Integration | TBD | done | 2026-03-19 | system_design, api_contracts, data_model, ui_spec, plan | yes | credentials auth + role-based guard + admin login |
| F0.5 UI Docs Split (Admin/User) | TBD | done | 2026-03-19 | ui_spec, plan | no | split UI specs and screen folders |
| F1 Public UI Screens (Home + Booking) | TBD | done | 2026-03-19 | ui_spec, plan, coding_log, test_plan | no | implement public home, booking flow, and customer profile |
| F1.1 Public Home + Booking Completion | TBD | done | 2026-03-20 | ui_spec, plan, coding_log, test_plan | no | add branch selector and full booking steps |
| F1.2 Booking selection UX polish | TBD | done | 2026-03-20 | ui_spec, plan, coding_log, test_plan | no | polish date-time selection buttons |
| F1.3 Booking personal details sizing | TBD | done | 2026-03-20 | ui_spec, plan, coding_log, test_plan | no | increase input size and spacing |
| F2 Admin UI Screens (Dashboard) | TBD | done | 2026-03-19 | ui_spec, plan, coding_log, test_plan | no | implement admin dashboard layout and widgets |
| F3 Admin Dashboard Data API | TBD | done | 2026-03-20 | system_design, api_contracts, plan, coding_log, test_plan | no | add /api/admin/dashboard and wire dashboard |
| F4 Auth DB + Users CRUD | TBD | done | 2026-03-20 | system_design, api_contracts, data_model, requirements, plan, manual_setup, coding_log, test_plan | yes | prisma + Neon, CRUD users, RBAC |
| F5 Core data models + seed | TBD | done | 2026-03-20 | system_design, data_model, plan, manual_setup, coding_log, test_plan | yes | add Service/Booking schema and seed data |
| F6 Public booking data from DB | TBD | pending | 2026-03-20 | ui_spec, api_contracts, system_design, plan, coding_log, test_plan | no | replace fixtures with API-backed data |
| F7 Admin dashboard KPIs from DB | TBD | done | 2026-03-20 | ui_spec, api_contracts, system_design, plan, coding_log, test_plan | no | compute dashboard stats from DB |
| F8 Admin logout action | TBD | done | 2026-03-20 | ui_spec, plan, coding_log, test_plan | no | add sign-out in admin sidebar |
| F9 Public booking submission | TBD | done | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, plan, coding_log, test_plan | no | create booking via API and surface in admin |
| F10 Move booking requests screen to public | TBD | done | 2026-03-25 | ui_spec, plan, coding_log, test_plan | no | rename booking_requests_queue to my_bookings |
| F11 Public calendar real picker + admin booking sync | TBD | done | 2026-03-25 | ui_spec, plan, coding_log, test_plan | no | real calendar picker and ensure admin dashboard shows new bookings |
| F12 DB-backed therapist selection | TBD | done | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, data_model, plan, manual_setup, coding_log, test_plan | yes | staff-service mapping + therapists API + booking payload updates |
| F13 Admin calendar day view positioning | TBD | done | 2026-03-25 | ui_spec, plan, coding_log, test_plan | no | time grid + booking placement |
| F14 Customer registration | TBD | done | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, data_model, plan, coding_log, test_plan | no | public registration UI + API + validation |
| F15 Customer Google login | TBD | done | 2026-03-25 | requirements, ui_spec, system_design, api_contracts, data_model, plan, coding_log, test_plan | yes | Google OAuth sign-in for customers |
