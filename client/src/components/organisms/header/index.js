import { Title1, Button } from './../../atoms'
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
        <p>Hola, soy un modal</p>
      </Modal>
    </>
  )
}

export { Header }
