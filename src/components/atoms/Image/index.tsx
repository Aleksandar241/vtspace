import { FC } from 'react';
import { profilePlaceholder } from '@images';
import styles from './image.module.scss';

type ImageProps = {
  id?: string;
  source?: string | null;
};

const Image: FC<ImageProps> = ({ source, id }): JSX.Element => (
  <img id={id} src={source ? source : profilePlaceholder} className={styles.image} alt="Image" />
);

export default Image;
