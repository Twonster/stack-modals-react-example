import {Modal} from "../../components";
import React, {FC, useState} from "react";
import {LoginModalProps} from "./types";
import {Button, CardActions, CardContent, List, TextField, Typography} from "@mui/material";
import {useModal} from "../../contexts/Modals";
import {ModalName} from "../../contexts/Modals/constants";
import {BaseModalProps} from "../../components/Modal/types";

const LoginModal: FC<LoginModalProps & BaseModalProps> = ({  modalKey, modalName, onClose, email, password, rememberMe }) => {
    const [emailText, setEmailText] = useState(email)
    const [passwordText, setPasswordText] = useState(password)

    const { openModal, closeModal } = useModal()

    const handleForgotPassword = () => {
        openModal(ModalName.FORGOT_PASSWORD, { email: emailText })
    }
    return (
        <Modal modalName={modalName} modalKey={modalKey} onClose={onClose}>
            <Typography variant="h4">
                Login
            </Typography>
            <Typography>
                Modal-key: {modalKey}
            </Typography>
            <CardContent>
                <List>
                    <TextField fullWidth value={emailText} onChange={(event) => setEmailText(event.target.value)} label="email" type="text" />
                    <TextField fullWidth value={passwordText} onChange={(event) => setPasswordText(event.target.value)} label="password" type="password" />
                </List>
            </CardContent>
            <CardActions>
                <Button variant="contained">Login</Button>
                <Button onClick={handleForgotPassword}>forgot password</Button>
                <Button onClick={() => closeModal(modalKey)} color="error">Close modal</Button>
            </CardActions>
        </Modal>
    )
}
export default LoginModal