import styled from 'styled-components'
import './../../../utils/fonts.css'
import { theme } from './../../../utils/constants'

const Label = styled.label`
  display: block;
  font-family: Poppins, sans-serif;
  color: ${(props) => props.theme.carbon};
`

Label.defaultProps = {
  theme: theme,
}

export { Label }
