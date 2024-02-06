import {Modal} from "../../components";
import React, {FC, useState} from "react";
import {LoginModalProps} from "./types";
import {Button, CardActions, CardContent, CardHeader, TextField} from "@mui/material";
import {useModal} from "../../contexts/Modals/ModalContextProvider";
import {ModalName} from "../../contexts/Modals/constants";

const LoginModal: FC<LoginModalProps> = ({  modalKey, modalName, onClose, email, password, rememberMe }) => {
    const [emailText, setEmailText] = useState(email)
    const [passwordText, setPasswordText] = useState(password)

    const { openModal } = useModal()

    const handleForgotPassword = () => {
        openModal(ModalName.FORGOT_PASSWORD, { email })
    }
    return (
        <Modal modalName={modalName} modalKey={modalKey} onClose={onClose}>
            <CardHeader>Login</CardHeader>
            <CardContent>
                <TextField value={emailText} onChange={(event) => setEmailText(event.target.value)} label="email" type="text" />
                <TextField value={passwordText} onChange={(event) => setPasswordText(event.target.value)} label="password" type="password" />
            </CardContent>
            <CardActions>
                <Button>Login</Button>
                <Button onClick={handleForgotPassword}>forgot password</Button>
            </CardActions>
        </Modal>
    )
}
export default LoginModal