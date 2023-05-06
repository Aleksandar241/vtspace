import { FC } from 'react';

import styles from './image.module.scss';

type ImageProps = {
  source?: string;
};

const Navigation: FC<ImageProps> = ({source}): JSX.Element => {
  return (
    <img src={source} className={styles.image} alt="Image" />
  );
};

export default Navigation;
