# Quickstart: GitHub Vercel CI/CD

## Manual Setup Checklist

### 1) Cau hinh GitHub Secrets

**Environment**: GitHub repository settings
**Owner**: Repo admin
**Prerequisites**:
- Da co Vercel project
- Tai khoan/org Vercel co quyen truy cap project

**Steps**:
1. Mo GitHub repository **Settings → Secrets and variables → Actions**.
2. Them cac secrets sau:
   - `VERCEL_TOKEN`: Vercel personal token
   - `VERCEL_ORG_ID`: Vercel org/team ID
   - `VERCEL_PROJECT_ID`: Vercel project ID
3. Luu secrets.

**Verification**:
- Push commit vao `feature/spec-kit` va xac nhan workflow **Vercel Production Deploy** thanh cong.
- Tao pull request target `feature/spec-kit` va xac nhan workflow **Vercel Preview Deploy** thanh cong va co URL preview trong summary.

**Rollback**:
- Tat GitHub Actions workflow hoac xoa secrets de dung deploy.

## Notes

- Secrets bat buoc cho moi deploy CI.
- Neu workflow loi auth, kiem tra lai gia tri secret va project/org IDs.
