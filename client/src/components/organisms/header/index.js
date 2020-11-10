import { Title1, Button } from './../../atoms'
import { AddUserForm } from './../../molecules'
import { HeaderWrapper } from './styled'
import { Modal } from './../index'
import { useModal } from './../../../hooks/useModal'

const Header = ({ ...props }) => {
  const { isShowing, toggle } = useModal()

  return (
    <>
      <HeaderWrapper>
        <Title1>Usuarios</Title1>
        <Button onClick={toggle}>Añadir usuario</Button>
      </HeaderWrapper>
      <Modal isShowing={isShowing} hide={toggle} refreshUsers={props.refreshUsers}>
        <AddUserForm />
      </Modal>
    </>
  )
}

export { Header }
