# Quickstart: GitHub Vercel CI/CD

## Manual Setup Checklist

### 1) Configure GitHub Secrets

**Environment**: GitHub repository settings
**Owner**: Repository admin
**Prerequisites**:
- Vercel project exists and is accessible
- Vercel account/org has access to the project

**Steps**:
1. Go to GitHub repository **Settings → Secrets and variables → Actions**.
2. Add the following secrets:
   - `VERCEL_TOKEN`: Vercel personal token
   - `VERCEL_ORG_ID`: Vercel org/team ID
   - `VERCEL_PROJECT_ID`: Vercel project ID
3. Save secrets.

**Verification**:
- Push a commit to `feature/spec-kit` and confirm the **Vercel Production Deploy** workflow succeeds.
- Open a pull request targeting `feature/spec-kit` and confirm the **Vercel Preview Deploy** workflow succeeds and reports a preview URL in the summary.

**Rollback**:
- Disable the GitHub Actions workflows or remove the secrets to stop deployments.

## Notes

- Secrets are required for all CI deploys.
- If a workflow fails with auth errors, re-check the secret values and project/org IDs.
