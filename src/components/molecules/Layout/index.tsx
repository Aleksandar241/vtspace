import { FC } from 'react';
import { Button } from '@atoms';
import { useAuth, useLogout } from '@hooks';

import styles from './layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  const { token } = useAuth();
  const { logout } = useLogout();

  return (
    <div className={styles.container}>
      {token && (
        <div className={styles.top}>
          <h1>VTSpace</h1>
          <Button type="button" title="Profile" />
          <Button type="button" title="Logout" onClick={logout} />
        </div>
      )}
      {children}
      <div className={styles.bottom}></div>
    </div>
  );
};

export default Layout;
