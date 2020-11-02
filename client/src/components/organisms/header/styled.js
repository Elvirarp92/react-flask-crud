import styled from 'styled-components'
import { theme } from './../../../utils/constants'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.carbon};
`

HeaderWrapper.defaultProps = { theme: theme }

export { HeaderWrapper }
