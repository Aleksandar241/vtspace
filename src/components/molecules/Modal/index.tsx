import { Button } from '@atoms';
import { FC } from 'react';
import ReactDom from 'react-dom';

import styles from './modal.module.scss';

type ModalProps = {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
};

const Modal: FC<ModalProps> = ({ children, visible, onClose }): JSX.Element | null => {
  if (!visible) return null;

  return ReactDom.createPortal(
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal}>{children}</div>
      </div>
    </>,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document.getElementById('portal')!
  );
};

export default Modal;
