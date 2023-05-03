import { FC } from 'react';

import { LoginForm, SignupForm } from '@molecules';

import styles from './login.module.scss';

const AuthForms: FC = (): JSX.Element => {
  return (
    <div>
      <LoginForm />
      <SignupForm />
    </div>
  );
};

export default AuthForms;
