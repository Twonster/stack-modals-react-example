import {BaseModalProps} from "../../components/Modal/types";
import {ModalServiceState} from "../../contexts/Modals/types";
import {ModalName} from "../../contexts/Modals/constants";

export type ForgotPasswordModalProps = ModalServiceState[ModalName.FORGOT_PASSWORD]