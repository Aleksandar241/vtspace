import { FC } from 'react';

import { LoginForm, SignupForm } from '@molecules';

import styles from './auth_forms.module.scss';

const AuthForms: FC = (): JSX.Element => {
  return (
    <div>
      <div className={styles.header}>
        <h1>VTSpace</h1>
        <p>Dobrodosli na VTSpace</p>
      </div>
      <div className={styles.loginContainer}>
        <LoginForm />
        <SignupForm />
      </div>
    </div>
  );
};

export default AuthForms;
