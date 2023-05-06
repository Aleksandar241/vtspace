import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

type AuthRoutesProps = {
  token?: string | null;
};

const AuthRoutes: FC<AuthRoutesProps> = ({ token }): JSX.Element => {
  return !token ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
