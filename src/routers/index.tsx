import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth, Home, NotFound } from '@pages';
import { useAuth } from '@hooks';
import ProtectedRoutes from './ProtectedRoutes';
import AuthRoutes from './AuthRoutes';

const Router: FC = (): JSX.Element => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes userId={user?.id} />}>
          <Route index element={<Home />} path="/" />
        </Route>
        <Route element={<AuthRoutes userId={user?.id} />}>
          <Route index element={<Auth />} path="/login" />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
