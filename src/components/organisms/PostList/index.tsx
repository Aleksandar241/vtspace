import { FC } from 'react';
import { Post } from '@molecules';

import styles from './post_list.module.scss';

const Home: FC = (): JSX.Element => {
  return (
    <section className={styles.post}>
      <Post />
      <Post />
      <Post />
    </section>
  );
};

export default Home;
