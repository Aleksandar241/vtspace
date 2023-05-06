import { FC, useCallback, memo } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@atoms';
import { useUpdateUserForm } from '@hooks';
import { UserModel } from '@models';

import styles from './updateUserForm.module.scss';

type UpdateUserFormType = {
  user?: UserModel | null;
  onSubmitUser?: () => void;
};

const UpdateUserForm: FC<UpdateUserFormType> = ({ user, onSubmitUser }): JSX.Element => {
  const { onSubmit, isLoading, initialValues } = useUpdateUserForm();

  const onSubmitHandler = useCallback((args: UserModel) => {
    onSubmit(args);
    onSubmitUser?.();
  }, []);

  return (
    <>
      <Formik initialValues={user || initialValues} onSubmit={onSubmitHandler}>
        <Form className={styles.container}>
          <Field type="text" name="name" placeholder="Ime" />
          <Field type="text" name="surname" placeholder="Prezime" />
          <Field type="text" name="image" placeholder="Url fotografije" />
          <Button type="submit" disabled={isLoading} title="Edit user" />
        </Form>
      </Formik>
    </>
  );
};

export default memo(UpdateUserForm);
