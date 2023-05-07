import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@atoms';
import { useSignupForm } from '@hooks';
import styles from './signup.module.scss';

const SignupForm: FC = (): JSX.Element => {
  const { initialValues, onSubmit, isLoading, validationScheme } = useSignupForm();
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationScheme}>
      <div className={styles.signupForm}>
        <Form className={styles.container}>
          <h3 className={styles.inputHeader}>SIGN UP</h3>
          <p className={styles.inputText}>Registruj se putem email addrese</p>
          <Field type="email" className={styles.inputField} name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
          <Field type="text" className={styles.inputField} name="name" placeholder="Ime" />
          <ErrorMessage name="name" component="div" />
          <Field type="text" className={styles.inputField} name="surname" placeholder="Prezime" />
          <ErrorMessage name="surname" component="div" />
          <Field
            type="password"
            className={styles.inputField}
            name="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" component="div" />
          <Field
            type="password"
            className={styles.inputField}
            name="confirmPassword"
            placeholder="Potvrdi password"
          />
          <ErrorMessage name="confirmPassword" component="div" />
          <Button type="submit" disabled={isLoading} title="Signup" />
        </Form>
      </div>
    </Formik>
  );
};

export default SignupForm;
