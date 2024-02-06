import {ModalName} from "./constants";

export type ModalServiceState = {
    [ModalName.LOGIN]: {
        email: string;
        password?: string;
        rememberMe?: boolean
    },
    [ModalName.FORGOT_PASSWORD]: {
        email: string;
    },
}