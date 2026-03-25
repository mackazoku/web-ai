# AGENTS.md — Next.js Web App Development Rules

## 🎯 Project Mission
Develop a high-quality Next.js web application following a standard software development lifecycle. Coding is only executed after requirements, UI design, system design, and task planning are clearly defined and reviewed.

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
- If Next.js provides the API layer:
  - Prisma
  - PostgreSQL
  - Zod validation

### Architecture
- Clean Architecture (simple, pragmatic)
- Clear separation of UI / Logic / Data
- Server Components by default, Client Components only when needed

---

## 🔁 Standard Development Flow (MANDATORY)

requirements → ui design → system design → tasks → coding → review → test → deploy

Coding before completing and updating documentation is NOT allowed.

### Definition of Ready (Before Coding)
- Scope is reflected in `docs/specs/requirements.md`.
- UI behavior/state is reflected in `docs/design/ui/ui_spec.md`.
- System/API/data model impact is reflected in design docs.
- Execution plan exists in `docs/plan/implementation_plan.md` with task status.
- User approval is confirmed when scope/logic/architecture changed.

### Definition of Done (After Coding)
- Code is implemented and analyzed/tested for changed scope.
- Status is updated in `docs/plan/implementation_plan.md`.
- Delivery logs are updated in `docs/delivery/coding_log.md` and `docs/delivery/test_plan.md`.
- Manual steps are updated in `docs/delivery/manual_setup.md` (or explicitly marked none).

---

## 📂 Project Structure (Canonical)

docs/
 ├─ README.md
 ├─ specs/
 │   └─ requirements.md
 ├─ design/
 │   ├─ ui/
 │   │   ├─ ui_spec.md
 │   │   └─ screens/
 │   ├─ system/
 │   │   ├─ system_design.md
 │   │   ├─ api_contracts.md
 │   │   └─ data_model.md
 ├─ plan/
 │   ├─ implementation_plan.md
 │   ├─ milestones.md
 │   └─ status_board.md
 └─ delivery/
     ├─ coding_log.md
     ├─ test_plan.md
     └─ manual_setup.md

src/
 ├─ app/
 ├─ components/
 ├─ i18n/
 ├─ messages/
 ├─ providers/
 ├─ stores/
 └─ styles/

---

## 🧠 Agent Roles & Responsibilities

### AGENT_SPECS
- Read and understand user prompts.
- Always read `docs/specs/requirements.md`.
- Merge new user requirements into existing specs.
- Clarify ambiguities before any design or coding.

### AGENT_ARCHITECTURE
- Review UI designs in `docs/design/ui/screens/`.
- Update `docs/design/ui/ui_spec.md` when UI behavior/layout/state changes.
- Update `docs/design/system/system_design.md`.
- Update `docs/design/system/api_contracts.md` when endpoint contracts change.
- Update `docs/design/system/data_model.md` when model/schema changes.
- Define architecture, data flow, DB models, APIs, and Mermaid diagrams when needed.

### AGENT_IMPLEMENTATION
- Create or update `docs/plan/implementation_plan.md`.
- Break requirements into atomic tasks, including coding/review/test tasks.
- No coding until plan approval.

### AGENT_CODING
- Implement strictly based on `docs/plan/implementation_plan.md`.
- Prefer Server Components; move to Client Components only for interactivity.
- Do not add new libraries unless required.
- Avoid duplicated components.
- For data-heavy lists, implement pagination or infinite scroll with load-more.
- For screens where data can change during usage, implement refresh.

### AGENT_REVIEW
- Review correctness, architecture, duplication, a11y, and i18n usage.
- Ensure no hardcoded strings or debug prints.

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

1. Update `docs/specs/brainstorming.md`
2. Update `docs/design/system/design_suggestions.md`
3. Add structured suggestions with status tracking
4. Explicitly request user approval before implementation

No suggestion may be implemented unless its status is:

APPROVED

---

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

For all documentation under `docs/`, the agent must maintain:

- An English version (original file)
- A Vietnamese version named:

  {doc_name}_vn.md

Example:
- requirements.md
- requirements_vn.md

---

### Translation Policy

- English is the source of truth.
- Vietnamese version must accurately reflect the English content.
- The agent must update both versions whenever changes are made.
- If translation changes meaning, the agent must flag for review.

---

### Approval Rule

Before implementation, the agent must confirm:

✔ English documentation updated  
✔ Vietnamese documentation updated  
✔ Both versions consistent

---

## 📋 Mandatory Actions For Every User Request

1. Read `docs/specs/requirements.md`.
2. Review `docs/design/ui/screens/` and `docs/design/ui/ui_spec.md`.
3. Reconcile architecture docs:
   - `docs/design/system/system_design.md`
   - `docs/design/system/api_contracts.md`
   - `docs/design/system/data_model.md`
4. Update planning docs:
   - `docs/plan/implementation_plan.md`
   - `docs/plan/status_board.md`
5. Wait for user approval (for scope/logic/architecture-impacting changes).
6. Execute coding tasks.
7. Review, fix lint issues, and test code.
8. Update delivery docs:
   - `docs/delivery/coding_log.md`
   - `docs/delivery/test_plan.md`
   - `docs/delivery/manual_setup.md` (when manual setup is needed)
9. For each request, update `docs/plan/implementation_plan.md` status (done/pending/failed) and add flowchart/diagram when feature logic changes.
10. Mirror phase-level progress in `docs/plan/status_board.md`.
11. Ensure each changed plan item has explicit metadata:
   - `owner`
   - `status`
   - `last_updated`
   - `doc_impact`
   - `manual_setup_required`

---

## 📅 Manual Setup (MANDATORY)
- The agent MUST maintain `docs/delivery/manual_setup.md`.
- After implementing any feature, the agent MUST add all required manual steps (if any), including:
  - Hosting, domains, DNS, SSL
  - Secrets/env vars, CI/CD settings
  - DB migrations
  - Third-party providers
- Each manual step MUST include: environment, owner, prerequisites, verification steps, and rollback notes (if applicable).

Before declaring work "done", the agent MUST explicitly state:
`✔ Manual setup checklist updated (or none required)`

---

## 📌 Documentation Update Matrix (MANDATORY)

- Requirement/scope change:
  - `docs/specs/requirements.md`
- UI layout/state/interaction change:
  - `docs/design/ui/ui_spec.md`
  - related assets in `docs/design/ui/screens/`
- API signature/endpoint behavior change:
  - `docs/design/system/api_contracts.md`
- Entity/schema/index/relation change:
  - `docs/design/system/data_model.md`
- Architecture/flow/security/runtime design change:
  - `docs/design/system/system_design.md`
- Task breakdown/progress/dependency change:
  - `docs/plan/implementation_plan.md`
  - `docs/plan/status_board.md`
- Implementation execution note:
  - `docs/delivery/coding_log.md`
- Verification strategy/result update:
  - `docs/delivery/test_plan.md`
- Manual setup action required:
  - `docs/delivery/manual_setup.md`

---

## 🔄 Documentation Revalidation Rule (MANDATORY)

For every user input (new feature, enhancement, bug fix, follow-up, continue request), the agent MUST:

1. Re-read:
   - `docs/specs/requirements.md`
   - `docs/design/ui/ui_spec.md`
   - `docs/design/ui/screens/`
   - `docs/design/system/system_design.md`
   - `docs/design/system/api_contracts.md`
   - `docs/design/system/data_model.md`
   - `docs/plan/implementation_plan.md`
   - `docs/plan/status_board.md`
   - `docs/delivery/coding_log.md`
   - `docs/delivery/test_plan.md`
   - `docs/delivery/manual_setup.md`
2. Compare request vs current docs.
3. Decide whether docs need updates.

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

---

## ✅ Final Principle

If documentation is unclear: STOP, clarify, update docs, then continue.
