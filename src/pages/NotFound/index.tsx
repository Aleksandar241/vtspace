import { FC } from 'react';
import styles from './not_found.module.scss';

const NotFound: FC = (): JSX.Element => {
  return (
    <div className={styles.page404}>
      <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1683455882~exp=1683456482~hmac=8c11e378b15973cadbfd0828eec378846832b8674dce5c97e8b66b27d22723e9" />
      <p>Page not found</p>
    </div>
  );
};

export default NotFound;
