---
name: "vercel-deploy"
description: "Vercel deployment checklist and promotion rules."
---

# Vercel Deploy Playbook

## Checklist
- `npm run build` passes locally.
- Prisma client generated after schema change.
- Env vars validated (DB, auth, provider keys).
- Use `vercel --prod` only after successful preview or local build.

## Promotion
- Promote to production only after:
  - Build passes
  - Critical routes smoke-tested

## Post-Deploy
- Confirm alias URL is updated.
- Record deployment URL and time in delivery notes if required.
