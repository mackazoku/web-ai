# GitHub Actions Setup

## Purpose
Document CI/CD setup steps and required secrets for GitHub Actions.

## Required Secrets
- `DATABASE_URL`
- `AUTH_SECRET`
- `NEXTAUTH_URL` (if using NextAuth)
- `PUBLIC_BASE_URL`

## Required Variables
- `NODE_VERSION`

## Notes
- Keep environment-specific values in your CI secret store.
