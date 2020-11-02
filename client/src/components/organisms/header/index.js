import { AddUser } from './../../molecules'
import { Title1 } from './../../atoms'
import { HeaderWrapper } from './styled'

const Header = () => {
  return (
    <HeaderWrapper>
      <Title1>Usuarios</Title1>
      <AddUser />
    </HeaderWrapper>
  )
}

export { Header }
