import { FC } from 'react';

import { LoginForm, SignupForm } from '@molecules';

import styles from './auth_forms.module.scss';

const AuthForms: FC = (): JSX.Element => {
  return (
    <div>
      <div className={styles.header}>
      <h1>VTSpace</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae consequat orci, et blandit odio. Ut ante arcu, 
      accumsan a commodo ut, tempus nec lorem. Integer id est nunc. 
    </p>
      </div>
    <div className={styles.loginContainer}>
      <LoginForm />
      <SignupForm />
    </div>
    </div>
  );
};

export default AuthForms;
