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
        <div className={styles.signupForm}>
          <Form className={styles.container}>
            <h3 className={styles.inputHeader}>SIGN UP</h3>
            <p className={styles.inputText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat orci, et blandit odio. </p>
            <Field className={styles.inputField} type="email" name="email"placeholder="enter your email address" />
            <ErrorMessage name="email" component="div" />
            <Field className={styles.inputField} type="text" name="name"  placeholder="enter your name"/>
            <ErrorMessage name="name" component="div" />
            <Field className={styles.inputField} type="text" name="surname" placeholder="enter your surname" />
            <ErrorMessage name="surname" component="div" />
            <Field className={styles.inputField} type="password" name="password" placeholder="enter your password"/>
            <ErrorMessage name="password" component="div" />
            <Field className={styles.inputField} type="password" name="confirmPassword" placeholder="confirm your password"/>
            <ErrorMessage name="confirmPassword" component="div" />
            <Button type="submit" disabled={isLoading} title="Signup" />
          </Form>
        </div>
      </Formik>
    </>
  );
};

export default SignupForm;
