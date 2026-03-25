# AGENTS.md — Next.js Web App Development Rules

## 🎯 Project Mission
Develop a high-quality Next.js web application following a standard software development lifecycle. Coding is only executed after requirements, design, and task planning are clearly defined and reviewed.

Core mindset:
- Process > Design > Plan > Code
- Documentation is the source of truth
- No assumptions, no premature coding

---

## 🧱 Technology Stack

### Client / Web
- Next.js (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- i18n with next-intl
- React Query
- Zustand

### Backend / Infrastructure
- Prefer existing backend contracts (REST/GraphQL/Serverpod) when available
- If Next.js provides the API layer, use Prisma + PostgreSQL + Zod validation

### Architecture
- Clean Architecture (simple, pragmatic)
- Clear separation of UI / Logic / Data
- Server Components by default, Client Components only when needed

---

## 🔁 Standard Development Flow (MANDATORY)

spec → plan → tasks → coding → review → test → deploy

Coding before completing and updating documentation is NOT allowed.

### Definition of Ready (Before Coding)
- Scope and behavior are reflected in `specs/<feature>/spec.md`.
- Design decisions are captured in `specs/<feature>/research.md` and `specs/<feature>/data-model.md`.
- Interface contracts are captured in `specs/<feature>/contracts/` when applicable.
- Execution plan exists in `specs/<feature>/plan.md`.
- Task breakdown exists in `specs/<feature>/tasks.md`.
- Active feature is determined by current branch prefix or the most recently updated `specs/<feature>/` directory.
- User approval is confirmed when scope/logic/architecture/data changes.

### Definition of Done (After Coding)
- Code is implemented and analyzed/tested for changed scope.
- Status is updated in `specs/<feature>/tasks.md`.
- Verification notes are recorded in `specs/<feature>/tasks.md` and `legacy_docs/delivery/test_plan.md` until fully retired.
- Manual steps are updated in `specs/<feature>/quickstart.md` (or explicitly marked none).

---

## 📂 Project Structure (Canonical)

```text
.specify/
  scripts/
  templates/

specs/
  <feature>/
    spec.md
    plan.md
    tasks.md
    research.md
    data-model.md
    ui.md
    quickstart.md
    contracts/
    checklists/

legacy_docs/
  delivery/

src/
  app/
  components/
  i18n/
  messages/
  providers/
  stores/
  styles/
```

---

## 🧠 Agent Roles & Responsibilities

### AGENT_SPECS
- Read and understand user prompts.
- Always read `specs/<feature>/spec.md`.
- Merge new user requirements into the current spec.
- Clarify ambiguities before any design or coding.
- Use `specs-ui` skill when UI scope is non-trivial.

### AGENT_ARCHITECTURE
- Review relevant UI artifacts under `specs/<feature>/` if present.
- Update `specs/<feature>/spec.md` when UI behavior/layout/state changes.
- Update `specs/<feature>/data-model.md` when model/schema changes.
- Update `specs/<feature>/contracts/` when endpoint contracts change.
- Define architecture, data flow, DB models, APIs, and Mermaid diagrams when needed.
- Use `nextjs-auth` skill when auth/session/guard logic changes.

### AGENT_IMPLEMENTATION
- Create or update `specs/<feature>/plan.md`.
- Break requirements into atomic tasks in `specs/<feature>/tasks.md`.
- No coding until plan approval.

### AGENT_CODING
- Implement strictly based on `specs/<feature>/tasks.md`.
- Prefer Server Components; move to Client Components only for interactivity.
- Do not add new libraries unless required.
- Avoid duplicated components.
- For data-heavy lists, implement pagination or infinite scroll with load-more.
- For screens where data can change during usage, implement refresh.
- Use `prisma-migrations` skill when `schema.prisma` changes.
- Use `i18n-playbook` skill when adding or editing locale keys.

### AGENT_REVIEW
- Review correctness, architecture, duplication, a11y, and i18n usage.
- Ensure no hardcoded strings or debug prints.
- Use `vercel-deploy` skill for deployment readiness checks.

---

## 💡 AI Proactive Suggestion Mode (MANDATORY)

The agent must not only execute user requests but also proactively propose:
- Improved specifications
- Sub-features and user stories
- Alternative system designs
- Architecture optimizations
- Technology improvements
- Industry best practices

For every new feature or major change:
1. Update `specs/<feature>/brainstorming.md`
2. Update `specs/<feature>/design_suggestions.md`
3. Add structured suggestions with status tracking
4. Explicitly request user approval before implementation

No suggestion may be implemented unless its status is:
APPROVED

### Suggestion Governance Rules

Each suggestion MUST include:
- Unique ID
- Title
- Description
- Scope impact
- Related screens / features
- Trade-offs
- Estimated complexity
- Status: (proposed / under_review / approved / rejected / implemented)
- Owner decision (user)

The agent must not assume approval.
Implementation may proceed only after user selects and approves specific suggestions.

Before coding, the agent must state:
✔ Suggestions reviewed
✔ Approved suggestions selected
✔ Ready for implementation

---

## 🌏 Bilingual Documentation Rule (MANDATORY)

For all documentation under `specs/<feature>/`, the agent must maintain:
- An English version (original file)
- A Vietnamese version named `{doc_name}_vn.md`

Example:
- spec.md
- spec_vn.md

### Translation Policy
- English is the source of truth.
- Vietnamese version must accurately reflect the English content.
- The agent must update both versions whenever changes are made.
- If translation changes meaning, the agent must flag for review.

### Approval Rule

Before implementation, the agent must confirm:
✔ English documentation updated
✔ Vietnamese documentation updated
✔ Both versions consistent

---

## 📋 Mandatory Actions For Every User Request

1. Read `specs/<feature>/spec.md` and `specs/<feature>/plan.md`.
2. Review `specs/<feature>/research.md`, `specs/<feature>/data-model.md`, and `specs/<feature>/contracts/` if present.
3. Update `specs/<feature>/plan.md`, `specs/<feature>/tasks.md`, and `specs/<feature>/ui.md` as needed.
4. Wait for user approval for scope/logic/architecture/data changes.
5. Execute coding tasks.
6. Review, fix lint issues, and test code.
7. Update `specs/<feature>/tasks.md` with status and verification notes.
8. Update `legacy_docs/delivery/test_plan.md` until fully retired.
9. Update `specs/<feature>/quickstart.md` if any manual setup is required.
10. Ensure each changed task item includes owner, status, last_updated, doc_impact, manual_setup_required.

---

## 📅 Manual Setup (MANDATORY)

- The agent MUST maintain `specs/<feature>/quickstart.md`.
- After implementing any feature, the agent MUST add all required manual steps if any, including hosting, domains, DNS, SSL, secrets/env vars, CI/CD settings, DB migrations, and third-party providers.
- Each manual step MUST include environment, owner, prerequisites, verification steps, and rollback notes if applicable.

Before declaring work "done", the agent MUST explicitly state:
`✔ Manual setup checklist updated (or none required)`

---

## 📌 Documentation Update Matrix (MANDATORY)

- Requirement/scope change: `specs/<feature>/spec.md`
- UI layout/state/interaction change: `specs/<feature>/ui.md` (or `spec.md` if UI change is minor)
- API signature/endpoint behavior change: `specs/<feature>/contracts/`
- Entity/schema/index/relation change: `specs/<feature>/data-model.md`
- Architecture/flow/security/runtime design change: `specs/<feature>/research.md`
- Task breakdown/progress/dependency change: `specs/<feature>/tasks.md`
- Implementation execution note: `specs/<feature>/tasks.md`
- Verification strategy/result update: `legacy_docs/delivery/test_plan.md`
- Manual setup action required: `specs/<feature>/quickstart.md`

---

## 🔄 Documentation Revalidation Rule (MANDATORY)

For every user input, the agent MUST:
1. Re-read `specs/<feature>/spec.md` and `specs/<feature>/plan.md`.
2. Re-read `specs/<feature>/research.md`, `specs/<feature>/data-model.md`, and `specs/<feature>/contracts/` if present.
3. Compare request vs current docs.
4. Decide whether docs need updates.

If still valid, explicitly state:
`✔ Documentation reviewed. No update required.`

If update is required:
- Update docs first.
- Summarize changes.
- If scope/logic/architecture changed, STOP and request approval.

Coding is NOT allowed before documentation alignment.

---

## 🔍 Uncommitted Changes Review (MANDATORY)

Before confirming any requirement or implementation decision, the agent MUST:
1. Review all modified but uncommitted files.
2. Ensure consistency between request, docs, and pending changes.

The agent must explicitly state:
`✔ Uncommitted changes reviewed and confirmed consistent.`

If inconsistency exists:
- STOP
- Explain conflict
- Ask user how to proceed

---

## 🔧 Next.js Rules (MANDATORY)

### General
- Respect existing project structure and pragmatic clean architecture.
- Make minimal, scoped changes; avoid unrelated refactors.
- Fix lint issues before completion.
- Code/comments/docs in English only.

### Next.js
- Prefer Server Components; use Client Components only for interactivity.
- Avoid client-side data fetching when server-rendered data is sufficient.
- No hardcoded UI strings (use i18n).
- No `console.log` in production code.
- Use `next/image` for remote images; configure `images.domains` explicitly.
- Use `next/headers` and `cookies()` only in server components/actions.
- Validate server actions and API routes using Zod.
 - If `schema.prisma` changes, run `npx prisma generate` and create a migration (`npx prisma migrate dev --name <name> --create-only`), then update `tasks.md` and `quickstart.md`.

### Performance & SEO
- Use `metadata` and `generateMetadata` appropriately.
- Avoid waterfall fetches; use parallel data loads.
- Keep bundle size lean; split heavy client components.
- Ensure accessible color contrast and keyboard navigation.

---

## ⚠️ Absolute Rules

- No coding before documentation updates.
- No manual edits to generated files.
- Always regenerate code when required.
 - Use `.specify/scripts/bash/create-new-feature.sh` for new features and `.specify/scripts/bash/setup-plan.sh` before planning.

---

## ✅ Final Principle

If documentation is unclear: STOP, clarify, update docs, then continue.

## Recent Changes
- 004-booking-success: Added TypeScript 5, React 18, Next.js 14 (App Router) + NextAuth, next-intl, Prisma, Zod, React Query, Zustand
- 003-google-login: Added TypeScript 5, React 18, Next.js 14 (App Router) + NextAuth, next-intl, Prisma, Zod, React Query, Zustand
- 002-user-registration: Added TypeScript 5, React 18, Next.js 14 (App Router) + next-intl, NextAuth, Prisma, Zod, React Query, Zustand

## Active Technologies
- TypeScript 5, React 18, Next.js 14 (App Router) + NextAuth, next-intl, Prisma, Zod, React Query, Zustand (003-google-login)

## Legacy Docs Retirement
