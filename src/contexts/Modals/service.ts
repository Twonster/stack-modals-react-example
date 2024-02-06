import {createModal, StackModals} from "stack-modals";
import {ModalServiceState} from "./types";
import {ModalName} from "./constants";
import {LoginModalProps} from "../../Modals/LoginModal/types";
import {ForgotPasswordModalProps} from "../../Modals/ForgotPasswordModal/types";

const ModalService = new StackModals<ModalServiceState>({
    // variant 1
    // [ModalName.LOGIN]: {
    //     email: '',
    //     password: '',
    //     rememberMe: false
    // } ,
    // [ModalName.FORGOT_PASSWORD]: {
    //     email: ''
    // },

    // variant 2
    ...createModal<ModalName.LOGIN, LoginModalProps>(ModalName.LOGIN, { email: '' }),
    ...createModal<ModalName.FORGOT_PASSWORD, ForgotPasswordModalProps>(ModalName.FORGOT_PASSWORD, { email: '' })
})


export default ModalService