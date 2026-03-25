# Tasks: SPA Booking Platform

## Danh sách công việc hiện tại
| ID | Task | Status | Notes |
|---|---|---|---|
| T01 | Public booking flow (service/branch/date/time) | Done | Real calendar picker |
| T02 | Therapist selection from DB | Done | StaffService mapping |
| T03 | Public booking submission | Done | Pending bookings created |
| T04 | Admin dashboard KPIs | Done | DB-backed |
| T05 | Admin day calendar with time grid | Done | 09:00–18:00, 30-min slots |
| T06 | Admin calendar date navigation | Done | Prev/next day |
| T07 | Staff dashboard filtering | Done | Staff sees own schedule |
| T08 | Admin user CRUD | Done | Roles + status |
| T09 | Seed data (branches/services/bookings) | Done | `seed:core` |
| T10 | Payments integration | Pending | VNPay/Momo/Stripe |
| T11 | Email notifications | Pending | Confirmation + reminders |
| T12 | Admin calendar usability refresh | Pending | Header giờ rõ, legend trạng thái, sticky header, hover chi tiết |

## Verification
- Build: `npm run build`
- Manual: create booking → verify admin pending + schedule
