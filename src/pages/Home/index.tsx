import { FC, useState } from 'react';
import { UserCard } from '@molecules';
import { PostList } from '@organisms';

import styles from './home.module.scss';

const Home: FC = (): JSX.Element => {
  return (
    <main className={styles.home}>
      <UserCard />
      <PostList />
    </main>
  );
};

export default Home;
