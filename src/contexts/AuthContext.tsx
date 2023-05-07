import React, { FC, createContext } from 'react';
import { useLocalStorage } from '@hooks';
import { userKey } from '@constants';
import { UserModel } from '@models';

type UserType = Pick<UserModel, 'id' | 'email' | 'name' | 'role' | 'surname' | 'image'>;

type AuthType = {
  user?: UserType | null;
  setUser: (user?: UserType | null) => void;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthType>({
  user: null,
  setUser: () => null
});

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useLocalStorage(userKey, null);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
