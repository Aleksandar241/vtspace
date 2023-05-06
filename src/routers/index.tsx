import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth, Home, NotFound } from '@pages';
import { useAuth } from '@hooks';
import ProtectedRoutes from './ProtectedRoutes';
import AuthRoutes from './AuthRoutes';

const Router: FC = (): JSX.Element => {
  const { token } = useAuth();
  
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes token={token} />}>
          <Route index element={<Home />} path="/" />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route element={<AuthRoutes token={token} />}>
          <Route element={<Auth />} path="/login" />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
