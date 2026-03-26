---
description: "Danh sach cong viec cho GitHub Vercel CI/CD"
---

# Tasks: GitHub Vercel CI/CD

**Input**: Tai lieu thiet ke tu `/specs/008-github-vercel-cicd/`
**Prerequisites**: plan.md (bat buoc), spec.md (bat buoc cho user stories), design_suggestions.md

**Tests**: Khong yeu cau.

**Organization**: Cong viec duoc nhom theo user story de co the trien khai va kiem thu doc lap.

## Format: `[ID] [P?] [Story] Mo ta`

- **[P]**: Co the chay song song (file khac nhau, khong phu thuoc)
- **[Story]**: Thuoc user story nao (vi du: US1, US2)
- Include dung duong dan file trong mo ta

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Cap nhat tai lieu bat buoc truoc khi implement

- [x] T001 [P] Cap nhat plan va ghi chu CI trong /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/plan.md va /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/plan_vn.md voi quyet dinh workflow cuoi

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Cac dieu kien tien quyet dung chung cho moi story

- [x] T002 Them GitHub Actions workflow build + deploy trong /Users/dongdm/Develop/Source/mackazoku/web-ai/.github/workflows/vercel-deploy.yml
- [x] T003 [P] Them GitHub Actions workflow preview PR trong /Users/dongdm/Develop/Source/mackazoku/web-ai/.github/workflows/vercel-preview.yml
- [x] T004 [P] Ghi tai lieu GitHub secrets bat buoc trong /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/quickstart.md va /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/quickstart_vn.md

---

## Phase 3: User Story 1 - Auto deploy on main branch (Priority: P1)

**Goal**: Deploy Vercel khi push vao `feature/spec-kit`.

**Independent Test**: Push vao branch va xac nhan deployment.

### Implementation for User Story 1

- [x] T005 [US1] Cau hinh job deploy production bang Vercel CLI trong /Users/dongdm/Develop/Source/mackazoku/web-ai/.github/workflows/vercel-deploy.yml

**Checkpoint**: User Story 1 hoat dong va co the test doc lap

---

## Phase 4: User Story 2 - Deployment safety checks (Priority: P2)

**Goal**: Bat buoc build check truoc deploy.

**Independent Test**: Lam hong build va xac nhan deploy khong chay.

### Implementation for User Story 2

- [x] T006 [US2] Them buoc build gate truoc deploy trong /Users/dongdm/Develop/Source/mackazoku/web-ai/.github/workflows/vercel-deploy.yml
- [x] T007 [US2] Them buoc thong bao trang thai deploy (log/summary) trong /Users/dongdm/Develop/Source/mackazoku/web-ai/.github/workflows/vercel-deploy.yml

**Checkpoint**: User Story 1 va 2 deu hoat dong doc lap

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Cap nhat tai lieu va kiem thu

- [x] T008 [P] Cap nhat ghi chu xac nhan trong /Users/dongdm/Develop/Source/mackazoku/web-ai/docs/delivery/test_plan.md
- [x] T009 Cap nhat trang thai task va ghi chu xac nhan trong /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/tasks.md

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: Khong phu thuoc - co the bat dau ngay
- **Foundational (Phase 2)**: Phu thuoc Phase 1 - CHAN tat ca user story
- **User Stories (Phase 3+)**: Phu thuoc Phase 2
- **Polish (Final Phase)**: Phu thuoc cac user story can hoan thanh

### User Story Dependencies

- **User Story 1 (P1)**: Bat dau sau Phase 2
- **User Story 2 (P2)**: Bat dau sau User Story 1

### Parallel Opportunities

- T002 va T003 co the chay song song (deploy + preview workflows)
- T004 co the chay song song voi setup workflow
- T008 co the chay song song sau khi implement xong

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

1. Hoan thanh Phase 1: Setup
2. Hoan thanh Phase 2: Foundational
3. Hoan thanh Phase 3: User Story 1
4. **DUNG va VALIDATE**: Test User Story 1 doc lap

### Incremental Delivery

1. Setup + Foundational -> Foundation san sang
2. Them User Story 1 -> Test doc lap -> Demo
3. Them User Story 2 -> Test doc lap -> Demo

---

## Notes

- [P] tasks = file khac nhau, khong phu thuoc
- Khong co automated tests cho feature nay

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
