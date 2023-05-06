import { FC } from 'react';
import { Footer } from '@atoms';
import { Navigation } from '@molecules';
import { useAuth } from '@hooks';

import styles from './layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  const { token } = useAuth();

  return (
    <div className={styles.container}>
      {token && <Navigation />}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
