import { AddUser } from './../../molecules'
import { Title1 } from './../../atoms'
import { HeaderWrapper } from './styled'
import { Modal } from './../index'
import { useModal } from './../../../hooks/useModal'

const Header = () => {
  const { isShowing, toggle } = useModal()

  return (
    <>
      <HeaderWrapper>
        <Title1>Usuarios</Title1>
        <AddUser action={toggle} />
      </HeaderWrapper>
      <Modal isShowing={isShowing} hide={toggle}>
        <p>Hola, soy un modal</p>
      </Modal>
    </>
  )
}

export { Header }
