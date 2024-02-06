import { PropsWithChildren, ReactNode } from 'react';

import ReactModal from 'react-modal';

import { ModalStore } from '@modules/modals/store';
import { ModalNameType, OpenModalFnResult } from '@modules/modals/store/types';

export type BaseModalProps = {
  modalKey: OpenModalFnResult<ModalStore>;
  modalName: ModalNameType<ModalStore>;
  isOpen?: boolean;
  onClose: (key: OpenModalFnResult<ModalStore>) => void;
  onAfterClose?: () => void;
};

export type WithCloseConfirmationType = {
  isDirty: boolean;
  isSubmitted: boolean;
};

export type ModalOldProps = {
  floatActionButton?: ReactNode;
  bottomShadow?: boolean;
  permanentBottomShadow?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  contentClasses?: string;
  fabClasses?: string;
  withCloseConfirmation?: WithCloseConfirmationType;
} & BaseModalProps &
  Omit<ReactModal.Props, 'isOpen' | 'onAfterClose'>;

export type ModalProps = PropsWithChildren<{
  floatActionButton?: ReactNode;
  bottomShadow?: boolean;
  permanentBottomShadow?: boolean;
  header?: ReactNode;
  footer?: ReactNode;
  contentClasses?: string;
  fabClasses?: string;
  withCloseConfirmation?: WithCloseConfirmationType;
  className?: string;
}> &
  BaseModalProps;
