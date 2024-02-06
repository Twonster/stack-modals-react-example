import {FC, Fragment, PropsWithChildren, useEffect, useRef, useState} from "react";
import ModalService from "./service";

const ModalContext: FC<PropsWithChildren> = ({ children }) => {
    const [openedModals, setOpenedModals] = useState(ModalService.stack)
    const { current: modalControl } = useRef(ModalService);

    useEffect(() => {
        const handler = (stack: typeof modalControl.stack) => {
            setOpenedModals(() => new Map(stack))
        }
        modalControl.addTrap("add", handler)
        modalControl.addTrap("update", handler)
        modalControl.addTrap("delete", handler)
    }, [modalControl]);

    return (
        <Fragment>
            {children}
        </Fragment>
    )
}