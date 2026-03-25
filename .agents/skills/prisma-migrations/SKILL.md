---
name: "prisma-migrations"
description: "Prisma migration workflow, seed usage, and env handling."
---

# Prisma Migrations Playbook

## When to use
- Any change to `prisma/schema.prisma`.

## Workflow
1. Update schema.
2. Run `npx prisma generate`.
3. Create migration: `npx prisma migrate dev --name <name> --create-only`.
4. Update `specs/<feature>/tasks.md` with migration status.
5. Update `specs/<feature>/quickstart.md` with migration steps.

## Environments
- Require `DATABASE_URL` set before migration.
- For CI or deployment: use `npx prisma migrate deploy`.

## Seeding
- Only run seed scripts explicitly listed in `package.json` or project docs.

## Guardrails
- Never edit generated migration SQL manually unless explicitly requested.
