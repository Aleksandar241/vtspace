import { FC, memo } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  title?: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ title, onClick }): JSX.Element => (
  <button className={styles.button} onClick={onClick}>
    {title}
  </button>
);

export default memo(Button);
