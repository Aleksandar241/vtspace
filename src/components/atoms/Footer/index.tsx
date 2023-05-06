import { FC } from 'react';
import styles from './footer.module.scss';

const Footer: FC = (): JSX.Element => (
  <footer className={styles.footer}>
    <svg height="100%" width="100%" viewBox="0 0 1920 166" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 69.7208L64 53.7208C128 37.7208 256 5.72084 384 11.0208C512 16.7208 640 58.7208 768 53.7208C896 48.7208 1024 -5.27916 1152 0.420837C1280 5.72084 1408 69.7208 1536 96.4208C1664 122.721 1792 112.721 1856 107.021L1920 101.721V165.721H1856C1792 165.721 1664 165.721 1536 165.721C1408 165.721 1280 165.721 1152 165.721C1024 165.721 896 165.721 768 165.721C640 165.721 512 165.721 384 165.721C256 165.721 128 165.721 64 165.721H0V69.7208Z" fill="url(#paint0_linear_18_4)"/>
      <defs>
        <linearGradient id="paint0_linear_18_4" x1="1920" y1="133" x2="-9.45077e-05" y2="112" gradientUnits="userSpaceOnUse">
          <stop stop-color="#264653"/>
          <stop offset="1" stop-color="#75B9A9"/>
        </linearGradient>
      </defs>
    </svg>
  </footer>
);

export default Footer;
