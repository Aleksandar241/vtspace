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
          <Field type="text" name="title" placeholder="Naslov" id="post-title" />
          <Field type="text" name="description" placeholder="Opis" id="post-description" />
          <Button
            type="submit"
            disabled={isLoading}
            title={post?.id ? 'Izmeni objavu' : 'Kreiraj objavu'}
            id="create-new-post-button"
          />
        </Form>
      </Formik>
    </>
  );
};

export default memo(CreateUpdatePostForm);
