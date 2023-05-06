import { FC } from 'react';
import { profilePlaceholder } from '@images';
import styles from './image.module.scss';

type ImageProps = {
  source?: string | null;
};

const Image: FC<ImageProps> = ({ source }): JSX.Element => (
  <img src={source ? source : profilePlaceholder} className={styles.image} alt="Image" />
);

export default Image;
