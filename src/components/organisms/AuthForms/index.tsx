import { FC } from 'react';

import { LoginForm, SignupForm } from '@molecules';

import styles from './auth_forms.module.scss';

const AuthForms: FC = (): JSX.Element => {
  return (
    <section className={styles.auth_wrapper}>
      <header className={styles.header}>
        <h1 className={styles.header_title}>VTSpace</h1>
        <p className={styles.header_description}>
          Visoka tehnička škola strukovnih studija u Novom Sadu je osnovana 1959 godine. Državna je
          visoka škola koja upisuje studente na budžet i samofinasiranje. Škola je akreditovala
          deset studijskih programa na osnovnim i dva studijska programa na master strukovnim
          studijama.
        </p>
      </header>
      <article className={styles.auth_container} id="login-form">
        <LoginForm />
        <SignupForm />
      </article>
    </section>
  );
};

export default AuthForms;
