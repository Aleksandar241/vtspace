import { FC, memo } from 'react';
import styles from './button.module.scss';

type ButtonProps = {
  title?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const Button: FC<ButtonProps> = ({
  title,
  onClick,
  disabled = false,
  type = 'button'
}): JSX.Element => (
  <button className={styles.button} type={type} onClick={() => onClick?.()} disabled={disabled}>
    {title}
  </button>
);

export default memo(Button);
