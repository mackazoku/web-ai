# Tasks: User Login Booking

## Task Metadata
Mỗi task gồm: owner, status, last_updated (YYYY-MM-DD), doc_impact, manual_setup_required.

| id | task | owner | status | last_updated | doc_impact | manual_setup_required |
|---|---|---|---|---|---|---|
| T-001 | Đánh dấu approved trong brainstorming/design_suggestions (EN/VN) | codex | done | 2026-03-25 | brainstorming, design_suggestions | no |
| T-002 | Cập nhật Prisma schema thêm customer role + booking ownership | codex | done | 2026-03-25 | data-model | yes |
| T-003 | Tạo migration cho booking ownership | codex | blocked | 2026-03-25 | data-model | yes |
| T-004 | Thêm trang login cho khách + i18n strings | codex | done | 2026-03-25 | spec | no |
| T-005 | Enforce auth ở booking API + thêm /api/bookings/my | codex | done | 2026-03-25 | contracts | no |
| T-006 | Gate trang booking public và tách client component | codex | done | 2026-03-25 | spec | no |
| T-007 | Thay fixtures My Bookings bằng API data + auth gate | codex | done | 2026-03-25 | spec | no |
| T-008 | Cập nhật ghi chú kiểm thử ở legacy_docs/delivery/test_plan.md | codex | done | 2026-03-25 | test_plan | no |

## Verification Notes
- Không thể tạo migration vì thiếu biến môi trường `DATABASE_URL`.
