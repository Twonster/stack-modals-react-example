import {Modal} from "../../components";
import React, {FC, useState} from "react";
import {ForgotPasswordModalProps} from "./types";
import {Button, CardActions, CardContent, TextField, Typography} from "@mui/material";
import {useModal} from "../../contexts/Modals";
import {ModalName} from "../../contexts/Modals/constants";
import {BaseModalProps} from "../../components/Modal/types";

const ForgotPasswordModal: FC<ForgotPasswordModalProps & BaseModalProps> = ({  modalKey, modalName, onClose, email }) => {
    const [emailText, setEmailText] = useState(email)
    const { openModal } = useModal()
    return (
        <Modal modalName={modalName} modalKey={modalKey} onClose={onClose}>
            <Typography variant="h4">
                Forgot password
            </Typography>
            <Typography>
                Modal-key: {modalKey}
            </Typography>
            <CardContent>
                <TextField fullWidth value={emailText} onChange={(event) => setEmailText(event.target.value)} label="email" type="text" />
            </CardContent>
            <CardActions>
                <Button>Send</Button>
                <Button onClick={() => openModal(ModalName.LOGIN, { email: emailText })}>Open Login Modal</Button>
            </CardActions>
        </Modal>
    )
}

export default ForgotPasswordModal