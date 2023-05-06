import { FC, memo, useState } from 'react';
import { useQuery } from 'react-query';
import { UserModel } from '@models';
import { UpdateUserForm, Modal } from '@molecules';
import { Button } from '@atoms';
import { get } from '@utils';
import { userKey, userPath } from '@constants';

import styles from './post.module.scss';

const User: FC = (): JSX.Element => {
  const { data, isLoading } = useQuery(userKey, () => get(userPath));
  const user: UserModel = data?.data;
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      {user?.name}
      {user?.surname}
      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <UpdateUserForm user={user} onSubmitUser={() => setShowModal(false)} />
      </Modal>
      <Button onClick={() => setShowModal(true)} title="Edit" />
    </div>
  );
};

export default memo(User);
