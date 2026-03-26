---
description: "Task list for GitHub Vercel CI/CD"
---

# Tasks: GitHub Vercel CI/CD

**Input**: Design documents from `/specs/008-github-vercel-cicd/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), design_suggestions.md

**Tests**: Not requested.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Documentation updates required before implementation

- [x] T001 [P] Update plan and CI notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/plan.md and /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/plan_vn.md with final workflow decisions

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core prerequisites shared by all stories

- [x] T002 Add GitHub Actions workflow for build + deploy in /Users/dongdm/Develop/Source/mackazoku/web-ai/.github/workflows/vercel-deploy.yml
- [x] T003 [P] Add GitHub Actions workflow for PR previews in /Users/dongdm/Develop/Source/mackazoku/web-ai/.github/workflows/vercel-preview.yml
- [x] T004 [P] Document required GitHub secrets in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/quickstart.md and /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/quickstart_vn.md

---

## Phase 3: User Story 1 - Auto deploy on main branch (Priority: P1)

**Goal**: Deploy to Vercel on pushes to `feature/spec-kit`.

**Independent Test**: Push to branch and verify deployment.

### Implementation for User Story 1

- [x] T005 [US1] Configure production deploy job using Vercel CLI in /Users/dongdm/Develop/Source/mackazoku/web-ai/.github/workflows/vercel-deploy.yml

**Checkpoint**: User Story 1 should be functional and testable independently

---

## Phase 4: User Story 2 - Deployment safety checks (Priority: P2)

**Goal**: Enforce build checks before deploy.

**Independent Test**: Break build and confirm deploy does not run.

### Implementation for User Story 2

- [x] T006 [US2] Add build step gating deploy in /Users/dongdm/Develop/Source/mackazoku/web-ai/.github/workflows/vercel-deploy.yml
- [x] T007 [US2] Add deploy status notification step (log/summary) in /Users/dongdm/Develop/Source/mackazoku/web-ai/.github/workflows/vercel-deploy.yml

**Checkpoint**: User Stories 1 and 2 both work independently

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Documentation and verification updates

- [x] T008 [P] Update verification notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/docs/delivery/test_plan.md
- [x] T009 Update task status and verification notes in /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: Depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2)
- **User Story 2 (P2)**: Can start after User Story 1

### Parallel Opportunities

- T002 and T003 can run in parallel (deploy + preview workflows)
- T004 can run in parallel with workflow setup
- T008 can run in parallel once implementation is complete

---

## Parallel Example: User Story 1

```bash
# Deploy workflow
Task: "Add GitHub Actions workflow for build + deploy in .github/workflows/vercel-deploy.yml"

# Preview workflow
Task: "Add GitHub Actions workflow for PR previews in .github/workflows/vercel-preview.yml"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently

### Incremental Delivery

1. Setup + Foundational -> Foundation ready
2. Add User Story 1 -> Test independently -> Demo
3. Add User Story 2 -> Test independently -> Demo

---

## Notes

- [P] tasks = different files, no dependencies
- No automated tests requested for this feature

## Task Metadata

| Task | Owner | Status | Last Updated | Doc Impact | Manual Setup Required |
| --- | --- | --- | --- | --- | --- |
| T001 | codex | done | 2026-03-26 | plan | no |
| T002 | codex | done | 2026-03-26 | workflow | no |
| T003 | codex | done | 2026-03-26 | workflow | no |
| T004 | codex | done | 2026-03-26 | quickstart | yes |
| T005 | codex | done | 2026-03-26 | workflow | no |
| T006 | codex | done | 2026-03-26 | workflow | no |
| T007 | codex | done | 2026-03-26 | workflow | no |
| T008 | codex | done | 2026-03-26 | test_plan | no |
| T009 | codex | done | 2026-03-26 | tasks | no |
