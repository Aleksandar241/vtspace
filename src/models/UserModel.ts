export enum Roles {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT'
}

export type UserModel = {
  id?: string | null;
  name?: string | null;
  surname?: string | null;
  image?: string | null;
  role: Roles;
  email: string | null;
};
