import styled from 'styled-components'
import './../../../utils/fonts.css'
import { theme } from './../../../utils/constants'

const Input = styled.input`
  font-family: Poppins, sans-serif;
  border: 1px solid ${(props) => props.theme.carbon}

  &:focus {
    border: 1px solid ${(props) => props.theme.sky}
  }

`

Input.defaultProps = {
  theme: theme,
}

export { Input }
