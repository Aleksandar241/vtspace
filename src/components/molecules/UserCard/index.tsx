import { FC, useState } from 'react';
import { Button, Image } from '@atoms';
import { Modal } from '@molecules';

import styles from './user_card.module.scss';

const Navigation: FC = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <aside className={styles.user_card}>
        <Image source='https://picsum.photos/200/200' />
        <h2 className={styles.user_card_username}>User Name</h2>
        <p className={styles.user_card_description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut ratione quos dolorum beatae voluptatem perspiciatis consequatur amet. Dolores, aliquam? Perspiciatis ipsa nostrum excepturi quaerat praesentium dicta quo inventore, minima ipsum.
        </p>
        <Button type='button' title='Profile'/>
      </aside>

      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <div>Modal content</div>
      </Modal>
      <Button onClick={() => setShowModal(true)} title="Create post" />
    </div>
  );
};

export default Navigation;
