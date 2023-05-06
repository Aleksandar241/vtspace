import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

type ProtectedRoutesProps = {
  token?: string | null;
};

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ token }): JSX.Element => {
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
