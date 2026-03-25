# Antigravity Kit Architecture

> Comprehensive AI Agent Capability Expansion Toolkit

---

## 📋 Overview

Antigravity Kit is a modular system consisting of:

-   **Specialist Agents** - Role-based AI personas
-   **Optimized Skills** - Domain-specific knowledge modules
-   **Workflows** - Slash command procedures

---

## 🏗️ Directory Structure

```plaintext
.agents/
├── ARCHITECTURE.md          # This file
├── agents/                  # Specialist Agents
├── skills/                  # Domain Skills (Consolidated)
├── workflows/               # Slash Commands
├── rules/                   # Global Rules (GEMINI.md)
└── scripts/                 # Master Validation Scripts
```

---

## 🤖 Core Agents

| Agent | Focus | Skills Used |
| ----- | ----- | ----------- |
| `orchestrator` | Multi-agent coordination | parallel-agents, behavioral-modes |
| `project-planner` | Discovery, task planning | brainstorming, plan-writing, architecture |
| `frontend-specialist` | Web UI/UX | frontend-design, nextjs-react-expert |
| `backend-specialist` | API, business logic | nodejs-best-practices, database-design |
| `mobile-developer` | iOS, Android, RN/Flutter | mobile-design, flutter-serverpod |
| `devops-engineer` | CI/CD, Docker | deployment-procedures |
| `security-auditor` | Security compliance | vulnerability-scanner |

---

## 🧩 Consolidated Skills

We have optimized the skill set to be token-efficient and comprehensive.

### Full Stack & Mobile
*   `flutter-serverpod`: Master skill for Flutter + Serverpod development.
*   `mobile-design`: UI/UX, Platform conventions (iOS/Android).
*   `frontend-design`: Web UI, Psychology, Decision Trees.

### Architecture & Data
*   `architecture`: Decision frameworks, ADRs, Patterns.
*   `database-design`: Schema, Selection, Optimization.
*   `api-patterns`: REST, GraphQL, etc.

### Quality & Process
*   `clean-code`: Global coding standards.
*   `code-review-checklist`: Security and quality gates.
*   `deployment-procedures`: CI/CD decisions.
*   `testing-patterns`: TDD, Unit, Integration strategies.

---

## 🔄 Workflows

Slash command procedures. Invoke with `/command`.

| Command | Description |
| ------- | ----------- |
| `/brainstorm` | Socratic discovery |
| `/create` | Create new features |
| `/debug` | Debug issues |
| `/deploy` | Deploy application |
| `/enhance` | Improve existing code |
| `/plan` | Task breakdown |
| `/test` | Run tests |

---

## 📊 Optimization Stats

*   **Rules**: Consolidated into 1 file (`GEMINI.md`).
*   **Skills**: Consolidated fragmented sub-files into single `SKILL.md` masters for key domains.
*   **Efficiency**: Reduced token usage and file clutter significantly.
