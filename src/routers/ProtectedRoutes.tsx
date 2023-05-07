import { FC } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

type ProtectedRoutesProps = {
  userId?: string | null;
};

const ProtectedRoutes: FC<ProtectedRoutesProps> = ({ userId }): JSX.Element => {
  return userId ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
