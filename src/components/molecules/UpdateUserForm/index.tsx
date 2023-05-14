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
  const { onSubmit, isLoading, initialValues, validationScheme } = useUpdateUserForm();

  const onSubmitHandler = useCallback((args: UserModel) => {
    onSubmit(args);
    onSubmitUser?.();
  }, []);

  return (
    <>
      <Formik
        initialValues={user || initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={validationScheme}>
        <Form className={styles.container}>
          <Field type="text" name="name" placeholder="Ime" id="user-form-name" />
          <Field type="text" name="surname" placeholder="Prezime" id="user-form-surname" />
          <Field type="text" name="image" placeholder="Url fotografije" id="user-form-img-url" />
          <Button
            type="submit"
            disabled={isLoading}
            title="Izmeni podatke"
            id="user-update-button"
          />
        </Form>
      </Formik>
    </>
  );
};

export default memo(UpdateUserForm);
