import { Title1, Button } from './../../atoms'
import { AddUserForm } from './../../molecules'
import { HeaderWrapper } from './styled'
import { Modal } from './../index'
import { useModal } from './../../../hooks/useModal'

const Header = () => {
  const { isShowing, toggle } = useModal()

  return (
    <>
      <HeaderWrapper>
        <Title1>Usuarios</Title1>
        <Button onClick={toggle}>Añadir usuario</Button>
      </HeaderWrapper>
      <Modal isShowing={isShowing} hide={toggle}>
        <AddUserForm />
      </Modal>
    </>
  )
}

export { Header }
