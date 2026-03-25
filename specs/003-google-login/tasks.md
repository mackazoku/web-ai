# Tasks: Customer Google Login

**Input**: Design documents from `/specs/003-google-login/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/, quickstart.md

**Tests**: Not requested in spec.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and documentation alignment

- [x] T001 Create UI spec for Google login in specs/003-google-login/ui.md and specs/003-google-login/ui_vn.md

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core prerequisites that must be complete before user stories

- [x] T002 [P] Add Google OAuth provider setup in src/modules/admin/auth/auth-options.ts (provider config + callbacks)
- [x] T003 [P] Update environment variable documentation in specs/003-google-login/quickstart.md
- [x] T004 [P] Add i18n keys for Google login button and errors in src/messages/en.json and src/messages/vi.json

---

## Phase 3: User Story 1 - Sign in with Google (Priority: P1) 🎯 MVP

**Goal**: Customer can sign in with Google and return to intended destination.

**Independent Test**: Start Google sign-in from /[locale]/login and land on booking page after successful auth.

### Implementation for User Story 1

- [x] T005 [US1] Add Google sign-in button to src/app/[locale]/(public)/login/page.tsx
- [x] T006 [US1] Wire Google sign-in callbackUrl handling in src/app/[locale]/(public)/login/page.tsx
- [x] T007 [US1] Ensure login error display covers OAuth failures in src/app/[locale]/(public)/login/page.tsx

**Checkpoint**: User Story 1 functional and independently testable

---

## Phase 4: User Story 2 - New customer account creation via Google (Priority: P2)

**Goal**: First-time Google sign-in creates a customer account.

**Independent Test**: A new Google account signs in once and can access booking immediately.

### Implementation for User Story 2

- [x] T008 [US2] Add Google profile-to-user mapping and account creation in src/modules/admin/auth/auth-options.ts
- [x] T009 [US2] Ensure customer role and active status assigned for new Google users in src/modules/admin/auth/auth-options.ts
- [x] T010 [US2] Prevent duplicate accounts by matching existing user by email in src/modules/admin/auth/auth-options.ts

**Checkpoint**: User Story 2 functional and independently testable

---

## Phase 5: User Story 3 - Error handling and recovery (Priority: P3)

**Goal**: Failed or canceled Google sign-in shows clear error and fallback path.

**Independent Test**: Cancel Google sign-in and confirm error message with retry or email/password option.

### Implementation for User Story 3

- [x] T011 [US3] Handle OAuth error query params and surface error in src/app/[locale]/(public)/login/page.tsx
- [x] T012 [US3] Add fallback guidance copy for retry or email/password in src/app/[locale]/(public)/login/page.tsx

**Checkpoint**: User Story 3 functional and independently testable

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Shared updates and verification

- [x] T013 [P] Update verification notes in specs/003-google-login/quickstart.md
- [x] T014 [P] Record verification in legacy_docs/delivery/test_plan.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies
- **Foundational (Phase 2)**: Depends on Setup completion
- **User Stories (Phase 3+)**: Depend on Foundational completion
- **Polish (Phase 6)**: Depends on desired user stories complete

### User Story Dependencies

- **User Story 1 (P1)**: After Foundational
- **User Story 2 (P2)**: After Foundational (depends on provider configuration)
- **User Story 3 (P3)**: After Foundational

### Parallel Opportunities

- T002/T003/T004 can run in parallel
- T005/T006/T007 can run in parallel (same file - run sequentially if needed)
- T013/T014 can run in parallel

---

## Parallel Example: User Story 1

```bash
Task: "Add Google sign-in button to src/app/[locale]/(public)/login/page.tsx"
Task: "Wire Google sign-in callbackUrl handling in src/app/[locale]/(public)/login/page.tsx"
Task: "Ensure login error display covers OAuth failures in src/app/[locale]/(public)/login/page.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. Validate Google sign-in + redirect

### Incremental Delivery

1. Complete Setup + Foundational
2. Add User Story 1 → validate
3. Add User Story 2 → validate
4. Add User Story 3 → validate
5. Final polish
