import { PropsWithChildren } from 'react';
import {ModalNameType, ModalScheme, OpenModalFnResult} from "stack-modals/types";
import {ModalServiceState} from "../../contexts/Modals/types";

export type BaseModalProps<S extends ModalScheme = ModalServiceState> = {
  modalKey: OpenModalFnResult<S>;
  modalName: ModalNameType<S>;
  onClose: (key: OpenModalFnResult<S>) => void;
};

export type ModalProps = PropsWithChildren<BaseModalProps>
