import {Modal} from "../../components";
import {FC} from "react";
import {useModal} from "../../modules/Modals";
import {LoginModalProps} from "./types";

const LoginModal: FC<LoginModalProps> = ({  modalKey, modalName, onClose, email, password, rememberMe }) => {
    const { openModal } = useModal()
    return (
        <Modal modalName={modalName} modalKey={modalKey} onClose={onClose}>
            <h3>Modal key: {modalKey}</h3>
            <p>{title}</p>
            <caption>{subtitle}</caption>
            <button onClick={() => onClose(modalKey)}>close</button>
            <button onClick={() => openModal('confirm', { title: 'Next confirm' })}>Open new Modal</button>
        </Modal>
    )
}
export default ConfirmModal