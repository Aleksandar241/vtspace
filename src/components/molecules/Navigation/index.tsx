import { Button } from '@atoms';
import { FC } from 'react';
import { useLogout } from '@hooks';

import styles from './navigation.module.scss';

const Navigation: FC = (): JSX.Element | null => {
  const { logout } = useLogout();

  return (
    <nav className={styles.navigation}>
      <h1 className={styles.navigation_logo}>VTSpace</h1>
      <div className={styles.navigation_links}>
        <Button type="button" title="Odjava" onClick={logout} />
      </div>
    </nav>
  );
};

export default Navigation;
