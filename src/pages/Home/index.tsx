import { FC } from 'react';
import { PostList } from '@organisms';
import { UserCard } from '@molecules';

import styles from './home.module.scss';

const Home: FC = (): JSX.Element => {
  return (
    <main className={styles.home}>
      <PostList />
      <UserCard />
    </main>
  );
};

export default Home;
