import { FC } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

type AuthRoutesProps = {
  token?: string | null;
};

const AuthRoutes: FC<AuthRoutesProps> = ({ token }): JSX.Element => {
  const location = useLocation();

  return !token ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />;
};

export default AuthRoutes;
