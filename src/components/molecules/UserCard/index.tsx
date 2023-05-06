import { FC, memo, useState } from 'react';
import { useQuery } from 'react-query';
import { UserModel } from '@models';
import { UpdateUserForm, Modal, CreatePostForm } from '@molecules';
import { Button, Image } from '@atoms';
import { get } from '@utils';
import { userKey, userPath } from '@constants';

import styles from './user_card.module.scss';

const UserCard: FC = (): JSX.Element => {
  const [showUserModal, setShowUserModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const { data } = useQuery(userKey, () => get(userPath));
  const user: UserModel = data?.data;

  return (
    <div>
      <aside className={styles.user_card}>
        <Image source={user?.image} />
        <h2 className={styles.user_card_username}>
          {user?.name} {user?.surname}
        </h2>
        <p className={styles.user_card_description}>{user?.role}</p>
        <Button type="button" title="Profile" />
        <Button onClick={() => setShowUserModal(true)} title="Izmeni podatke" />
        <Button onClick={() => setShowPostModal(true)} title="Kreiraj novu objavu" />
      </aside>
      <Modal visible={showUserModal} onClose={() => setShowUserModal(false)}>
        <UpdateUserForm user={user} onSubmitUser={() => setShowUserModal(false)} />
      </Modal>
      <Modal visible={showPostModal} onClose={() => setShowPostModal(false)}>
        <CreatePostForm onSubmitPost={() => setShowPostModal(false)} />
      </Modal>
    </div>
  );
};

export default memo(UserCard);
