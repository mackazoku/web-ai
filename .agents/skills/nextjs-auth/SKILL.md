---
name: "nextjs-auth"
description: "NextAuth usage rules, session strategy, and runtime constraints for Next.js App Router."
---

# Next.js Auth (NextAuth) Playbook

## When to use
- Any change touching auth, sessions, guards, or login flows.

## Core Rules
- Prefer server-side session checks using `getServerSession` in Server Components and Route Handlers.
- Do not use `next/headers` or `cookies()` in Client Components.
- Keep auth guards server-side to avoid client flicker.
- Use JWT session strategy unless a DB-backed session is explicitly required.
- Always gate admin vs customer roles in server code.

## App Router Constraints
- Route Handlers must be Edge-safe only if explicitly configured; otherwise assume Node runtime.
- Avoid importing Node-only modules in code that could be bundled for Edge.

## Patterns
- Public page auth gate:
  - Server component redirects unauthenticated users to login with `callbackUrl`.
- API auth gate:
  - Return 401 with `{code, message}` for unauthenticated/unauthorized access.

## Checks
- Ensure login pages are public and not wrapped by auth guards.
- Verify `callbackUrl` is sanitized and same-origin.
