import { FC } from 'react';
import { Image } from '@atoms';

import styles from './post.module.scss';

const Home: FC = (): JSX.Element => {
  return (
    <article className={styles.post}>
      <p className={styles.post_date}>06.05.2023. - 18:30h</p>
      <div className={styles.post_body}>
        <div className={styles.post_info}>
          <Image source='https://picsum.photos/200/200'/>
          <p className={styles.post_username}>User Name</p>
        </div>
        <div className={styles.post_content}>
          <h2 className={styles.post_title}>Lorem ipsum dolor</h2>
          <p className={styles.post_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tenetur velit, totam facere inventore reprehenderit voluptas quos placeat error vero assumenda nesciunt repellat laboriosam debitis libero excepturi officia consequuntur doloremque!
          </p>
        </div>
      </div>
    </article>
  );
};

export default Home;
