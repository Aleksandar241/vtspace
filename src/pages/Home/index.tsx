import { FC, useState } from 'react';
import { Modal, CreatePostForm, User } from '@molecules';
import { Button } from '@atoms';
import { PostList } from '@organisms';
import styles from './home.module.scss';

const Home: FC = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      Posts
      <PostList />
      <User />
      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <CreatePostForm onSubmitPost={() => setShowModal(false)} />
      </Modal>
      <Button onClick={() => setShowModal(true)} title="Create post" />
    </div>
  );
};

export default Home;
