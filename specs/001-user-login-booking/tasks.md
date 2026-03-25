# Tasks: User Login Booking

## Task Metadata
Each task includes: owner, status, last_updated (YYYY-MM-DD), doc_impact, manual_setup_required.

| id | task | owner | status | last_updated | doc_impact | manual_setup_required |
|---|---|---|---|---|---|---|
| T-001 | Mark approved suggestions in brainstorming/design_suggestions docs (EN/VN) | codex | done | 2026-03-25 | brainstorming, design_suggestions | no |
| T-002 | Update Prisma schema with customer role + booking ownership | codex | done | 2026-03-25 | data-model | yes |
| T-003 | Create migration for booking ownership fields | codex | blocked | 2026-03-25 | data-model | yes |
| T-004 | Add public customer login page and i18n strings | codex | done | 2026-03-25 | spec | no |
| T-005 | Enforce auth in booking API + add /api/bookings/my | codex | done | 2026-03-25 | contracts | no |
| T-006 | Gate public booking page and refactor client component | codex | done | 2026-03-25 | spec | no |
| T-007 | Replace My Bookings fixtures with API data + auth gate | codex | done | 2026-03-25 | spec | no |
| T-008 | Update verification notes in legacy_docs/delivery/test_plan.md | codex | done | 2026-03-25 | test_plan | no |

## Verification Notes
- Migration creation blocked because `DATABASE_URL` is not set in the environment.
