import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@atoms';
import { useLoginForm } from '@hooks';

import styles from './login.module.scss';

const LoginForm: FC = (): JSX.Element => {
  const { initialValues, onSubmit, isLoading, validationScheme } = useLoginForm();
  return (
    <>
      <p>LOGIN</p>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationScheme}>
        <Form className={styles.container}>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <Button type="submit" disabled={isLoading} title="Login" />
        </Form>
      </Formik>
    </>
  );
};

export default LoginForm;
