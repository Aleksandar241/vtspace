import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@atoms';
import { useSignupForm } from '@hooks';
import styles from './signup.module.scss';

const SignupForm: FC = (): JSX.Element => {
  const { initialValues, onSubmit, isLoading, validationScheme } = useSignupForm();
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationScheme}>
        <div className="signup-form">
          <Form className={styles.container}>
            <p>SIGN UP</p>
            <Field className="input-field" type="email" name="email"  />
            <ErrorMessage name="email" component="div" />
            <Field className="input-field" type="text" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field className="input-field" type="text" name="surname" />
            <ErrorMessage name="surname" component="div" />
            <Field className="input-field" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <Field className="input-field" type="password" name="confirmPassword" />
            <ErrorMessage name="confirmPassword" component="div" />
            <Button type="submit" disabled={isLoading} title="Signup" />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default SignupForm;
