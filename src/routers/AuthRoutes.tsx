import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

type AuthRoutesProps = {
  userId?: string | null;
};

const AuthRoutes: FC<AuthRoutesProps> = ({ userId }): JSX.Element => {
  return !userId ? <Outlet /> : <Navigate to="/" />;
};

export default AuthRoutes;
