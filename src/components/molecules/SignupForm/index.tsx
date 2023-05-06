import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@atoms';
import { useSignupForm } from '@hooks';
import styles from './signup.module.scss';

const SignupForm: FC = (): JSX.Element => {
  const { initialValues, onSubmit, isLoading, validationScheme } = useSignupForm();
  return (
    <>
      <p>SIGN UP</p>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationScheme}>
        <Form className={styles.container}>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field type="text" name="name" placeholder="Ime" />
          <ErrorMessage name="name" component="div" />
          <Field type="text" name="surname" placeholder="Prezime" />
          <ErrorMessage name="surname" component="div" />
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
          <Field type="password" name="confirmPassword" placeholder="Potvrdi password" />
          <ErrorMessage name="confirmPassword" component="div" />
          <Button type="submit" disabled={isLoading} title="Signup" />
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
