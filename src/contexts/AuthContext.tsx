import React, { FC, createContext } from 'react';
import { useLocalStorage } from '@hooks';

type AuthType = {
  token?: string | null;
  setToken: (token?: string | null) => void;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthType>({
  token: null,
  setToken: () => null
});

export const AuthContextProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [token, setToken] = useLocalStorage('token', null);

  return <AuthContext.Provider value={{ token, setToken }}>{children}</AuthContext.Provider>;
};
