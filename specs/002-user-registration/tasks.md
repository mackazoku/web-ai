# Tasks: User Registration

**Input**: Design documents from `/specs/002-user-registration/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Not requested in spec.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and documentation alignment

- [x] T001 Create UI spec for registration in specs/002-user-registration/ui.md and specs/002-user-registration/ui_vn.md (ui_vn waived per approval on 2026-03-25)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core prerequisites that must be complete before user stories

- [x] T002 Verify customer role and credential fields in prisma/schema.prisma; run `npx prisma generate` and create migration if schema changes
- [x] T003 [P] Confirm auth options allow customer login in src/modules/admin/auth/auth-options.ts (role/status preserved in session)

---

## Phase 3: User Story 1 - Register and Book (Priority: P1) 🎯 MVP

**Goal**: Customer can register with email+password and then log in to book.

**Independent Test**: Register account, log in, and reach booking page.

### Implementation for User Story 1

- [x] T004 [US1] Create registration page UI in src/app/[locale]/(public)/register/page.tsx
- [x] T005 [US1] Implement registration API in src/app/api/auth/register/route.ts (zod validation, bcrypt hash, role=customer, status=active)
- [x] T006 [US1] Add Register i18n keys in src/messages/en.json and src/messages/vi.json
- [x] T007 [US1] Redirect to login with callback on successful registration in src/app/[locale]/(public)/register/page.tsx

**Checkpoint**: User Story 1 functional and independently testable

---

## Phase 4: User Story 2 - Prevent Duplicate Accounts (Priority: P2)

**Goal**: Registration rejects duplicate emails with clear error.

**Independent Test**: Register an email, then attempt same email and see conflict error.

### Implementation for User Story 2

- [x] T008 [US2] Add duplicate email check and 409 response in src/app/api/auth/register/route.ts
- [x] T009 [US2] Show duplicate email error state in src/app/[locale]/(public)/register/page.tsx

**Checkpoint**: User Story 2 functional and independently testable

---

## Phase 5: User Story 3 - Handle Invalid Input (Priority: P3)

**Goal**: Invalid registration input shows clear validation errors.

**Independent Test**: Submit empty/invalid email or empty password and see validation errors.

### Implementation for User Story 3

- [x] T010 [US3] Add client-side validation messaging in src/app/[locale]/(public)/register/page.tsx
- [x] T011 [US3] Ensure server validation errors surface in UI in src/app/[locale]/(public)/register/page.tsx

**Checkpoint**: User Story 3 functional and independently testable

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Shared updates and verification

- [x] T012 [P] Update verification notes in specs/002-user-registration/quickstart.md
- [x] T013 [P] Record verification in legacy_docs/delivery/test_plan.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Stories (Phase 3+)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on desired user stories complete

### User Story Dependencies

- **User Story 1 (P1)**: After Foundational
- **User Story 2 (P2)**: After Foundational (independent from US1 but same files)
- **User Story 3 (P3)**: After Foundational (independent from US1 but same files)

### Parallel Opportunities

- T003 can run in parallel with T002
- T004/T005/T006 can run in parallel (different files)
- T012/T013 can run in parallel

---

## Parallel Example: User Story 1

```bash
Task: "Create registration page UI in src/app/[locale]/(public)/register/page.tsx"
Task: "Implement registration API in src/app/api/auth/register/route.ts"
Task: "Add Register i18n keys in src/messages/en.json and src/messages/vi.json"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate registration + login + booking access

### Incremental Delivery

1. Complete Setup + Foundational
2. Add User Story 1 → validate
3. Add User Story 2 → validate
4. Add User Story 3 → validate
5. Final polish
