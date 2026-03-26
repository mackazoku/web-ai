# Kế hoạch triển khai: GitHub Vercel CI/CD

**Branch**: `008-github-vercel-cicd` | **Date**: 2026-03-26 | **Spec**: /Users/dongdm/Develop/Source/mackazoku/web-ai/specs/008-github-vercel-cicd/spec.md
**Input**: Feature specification from `/specs/008-github-vercel-cicd/spec.md`

## Summary

Thêm workflow GitHub Actions để build và deploy tự động lên Vercel khi push vào `feature/spec-kit`, kèm preview cho PR và thông báo deploy.

## Technical Context

**Language/Version**: TypeScript 5, React 18, Next.js 14 (App Router)  
**Primary Dependencies**: GitHub Actions, Vercel CLI  
**Storage**: None  
**Testing**: `npm run build` làm CI gate  
**Target Platform**: Vercel (production cho branch)  
**Project Type**: Web application (Next.js)  
**Performance Goals**: CI chạy < 10 phút  
**Constraints**: Dùng GitHub secrets cho Vercel credentials  
**Scale/Scope**: Chỉ file workflow CI/CD

## Workflow Decisions (Final)

- Dùng Vercel CLI (`npx vercel`) với `pull` → `build` → `deploy --prebuilt`.
- Workflow deploy chạy khi push vào `feature/spec-kit`.
- Workflow preview chạy khi có pull request target `feature/spec-kit`.
- GitHub secrets bắt buộc: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
- Node version: 20.x cho CI.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Spec-first delivery: Plan theo spec. PASS
- Documentation là source of truth: Plan tham chiếu đủ spec artifacts. PASS
- Bilingual documentation: có bản `_vn`. PASS
- Explicit approval gates: Suggestions đã duyệt. PASS
- Minimal, pragmatic changes: Không đụng app code. PASS
- Quality & verification: Có build gate. PASS
- Operations & manual setup: Cần GitHub secrets. PASS

## Project Structure

### Documentation (feature này)

```text
specs/008-github-vercel-cicd/
+-- plan.md
+-- spec.md
+-- checklists/
+-- brainstorming.md
+-- design_suggestions.md
```

### Source Code (repository root)

```text
.github/
+-- workflows/
```

**Structure Decision**: Tạo GitHub Actions workflows cho build + deploy và preview PR.

## Complexity Tracking

No violations.
