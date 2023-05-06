import { Roles } from './UserModel';

export type PostModel = {
  id?: string | null;
  createdAt?: string | null;
  title?: string | null;
  description?: string | null;
  belongsToId?: string | null;
  belongsTo: {
    id?: string | null;
    name?: string | null;
    surname?: string | null;
    image?: string | null;
    role: Roles;
  };
};
