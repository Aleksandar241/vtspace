import { FC } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';

type ProtectedRoutesProps = {
  token?: string | null;
};

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ token }): JSX.Element => {
  const location = useLocation();

  return token ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoutes;
