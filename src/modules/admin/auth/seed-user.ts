export type SeedUser = {
  id: string;
  name: string;
  email: string;
  role: 'admin';
  password: string;
};

export function getSeedUser(): SeedUser | null {
  const email = process.env.ADMIN_SEED_EMAIL;
  const password = process.env.ADMIN_SEED_PASSWORD;

  if (!email || !password) {
    return null;
  }

  return {
    id: 'seed-admin',
    name: 'Admin',
    email,
    role: 'admin',
    password,
  };
}
