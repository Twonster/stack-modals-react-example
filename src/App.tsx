import {Button, Card, Typography} from "@mui/material";
import {useModal} from "./contexts/Modals";
import {ModalName} from "./contexts/Modals/constants";

const App = () => {
    const { openModal, closeModal, openedModals } = useModal()

    const handleOpenModal = () => {
        openModal(ModalName.FORGOT_PASSWORD, { email: '' })
    }
  return (
      <Card sx={{
          width: '400px',
      }}>
          <Typography variant="h3">MODALS SERVICE</Typography>
          <Button onClick={() => {
              openModal(ModalName.LOGIN, { email: 'test@mail.com', password: '11111111' })
          }} variant="contained">Open Login Modal</Button>
      </Card>

  )
}

export default App