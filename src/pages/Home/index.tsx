import { FC, useState } from 'react';
import { Modal } from '@molecules';
import styles from './home.module.scss';
import { Button } from '@atoms';

const Home: FC = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      Posts
      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <div>Modal content</div>
      </Modal>
      <Button onClick={() => setShowModal(true)} title="Create post" />
    </div>
  );
};

export default Home;
