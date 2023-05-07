import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@atoms';
import { useLoginForm } from '@hooks';

import styles from './login.module.scss';

const LoginForm: FC = (): JSX.Element => {
  const { initialValues, onSubmit, isLoading, validationScheme } = useLoginForm();
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationScheme}>
        <div className={styles.loginForm}>
          <Form className={styles.container}>
            <h3 className={styles.inputHeader}>LOGIN</h3>
            <p className={styles.inputText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat orci, et blandit odio. </p>
            <Field className={styles.inputField} type="email" name="email" placeholder="enter your email address" />
            <ErrorMessage name="email" component="div" />
            <Field className={styles.inputField} type="password" name="password" placeholder="enter your password"/>
            <ErrorMessage name="password" component="div" />
            <Button type="submit" disabled={isLoading} title="Login" />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default LoginForm;
