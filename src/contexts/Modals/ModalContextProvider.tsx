import {createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useRef, useState} from "react";
import ModalService from "./service";
import {ModalServiceState} from "./types";
import {ModalName} from "./constants";
import LoginModal from "../../Modals/LoginModal/LoginModal";
import ForgotPasswordModal from "../../Modals/ForgotPasswordModal/ForgotPasswordModal";

const ModalContext = createContext({
    openedModals: ModalService.stack,
    openModal: ModalService.addModal,
    closeModal: ModalService.deleteModal
})
const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [openedModals, setOpenedModals] = useState(ModalService.stack)
    const { current: modalControl } = useRef(ModalService);
    const { stack,  deleteModal, addModal, addTrap, getModalName} = modalControl

    useEffect(() => {
        const handler = (newStack: typeof stack) => {
            setOpenedModals(() => new Map(newStack))
        }
        addTrap("add", handler)
        addTrap("update", handler)
        addTrap("delete", handler)
    }, [modalControl]);

    return (
        <ModalContext.Provider value={useMemo(() => ({
            openedModals,
            closeModal: deleteModal,
            openModal: addModal
        }), [])}>
            <div>
                {Array.from(openedModals.entries()).map(([key, props]) => {
                    const name = getModalName(key)

                    const createDefaultProps = <T extends keyof ModalServiceState>(modalName: T) => ({
                        key,
                        modalName,
                        modalKey: key,
                        onClose: deleteModal,
                        ...(props as ModalServiceState[T])
                    });

                    switch (name) {
                        case ModalName.LOGIN:
                            return <LoginModal {...createDefaultProps(ModalName.LOGIN)} />
                        case ModalName.FORGOT_PASSWORD:
                            return <ForgotPasswordModal {...createDefaultProps(ModalName.FORGOT_PASSWORD)} />
                        default:
                            return null
                    }
                })}
            </div>
            {children}
        </ModalContext.Provider>
    )
}

const useModal = () => useContext(ModalContext);

export { ModalContextProvider,  useModal }