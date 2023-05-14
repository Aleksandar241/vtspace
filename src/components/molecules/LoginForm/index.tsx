import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@atoms';
import { useLoginForm } from '@hooks';

import styles from './login.module.scss';

const LoginForm: FC = (): JSX.Element => {
  const { initialValues, onSubmit, isLoading, validationScheme } = useLoginForm();
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationScheme}>
      <div className={styles.loginForm}>
        <Form className={styles.container}>
          <h3 className={styles.inputHeader} id="login-form-header">
            Prijava
          </h3>
          <p className={styles.inputText}>
            Pre prijave molimo da proveriti vaše email sanduče kako bi usplešno izvršili
            verifikaciju naloga. Nakon toga možete se prijaviti na VTSpace!
          </p>
          <Field
            type="email"
            className={styles.inputField}
            name="email"
            placeholder="Email"
            id="login-email"
          />
          <ErrorMessage name="email" component="div" />
          <Field
            type="password"
            className={styles.inputField}
            name="password"
            placeholder="Password"
            id="login-password"
          />
          <ErrorMessage name="password" component="div" />
          <Button type="submit" disabled={isLoading} title="Login" id="login-button" />
        </Form>
      </div>
    </Formik>
  );
};

export default LoginForm;
