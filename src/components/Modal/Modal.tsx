import React, {FC, memo, useCallback, useRef} from 'react';

import {ModalProps} from './types';

import './styles.css';
import {Card} from "@mui/material";

const preventClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  e.stopPropagation();
};

const Modal: FC<ModalProps> = ({
  modalKey,
  onClose,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    onClose?.(modalKey);
  }, [modalKey, onClose]);

  return (
    <div
      ref={backdropRef}
      id={modalKey}
      key={modalKey}
      onClick={handleClose}
      className={['overlay'].join(' ')}
    >
      <Card ref={modalRef} onClick={preventClose} className={['modal', 'ReactModal__Content'].join(' ')}>
        <div className="content">
          {children}
        </div>
      </Card>
    </div>
  );
};

export default memo(Modal);
