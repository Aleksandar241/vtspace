import { FC, useCallback, memo } from 'react';
import { Formik, Form, Field } from 'formik';
import { Button } from '@atoms';
import { useCreateUpdatePostForm } from '@hooks';
import { PostModel } from '@models';

import styles from './createUpdatePostForm.module.scss';

type CreateUpdatePostFormType = {
  post?: PostModel | null;
  onSubmitPost?: () => void;
};

const CreateUpdatePostForm: FC<CreateUpdatePostFormType> = ({
  post,
  onSubmitPost
}): JSX.Element => {
  const { onSubmit, isLoading, initialValues } = useCreateUpdatePostForm();

  const onSubmitHandler = useCallback((args: PostModel) => {
    onSubmit(args);
    onSubmitPost?.();
  }, []);

  return (
    <>
      <Formik initialValues={post || initialValues} onSubmit={onSubmitHandler}>
        <Form className={styles.container}>
          <Field type="text" name="title" />
          <Field type="text" name="description" />
          <Button type="submit" disabled={isLoading} title="Login" />
        </Form>
      </Formik>
    </>
  );
};

export default memo(CreateUpdatePostForm);
