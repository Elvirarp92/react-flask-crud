import styled from 'styled-components'
import './../../../utils/fonts.css'
import { theme } from './../../../utils/constants'

const Button = styled.button`
  background: ${(props) => props.theme.white};
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.carbon};
  color: ${(props) => props.theme.carbon};
  margin: 0 1em;
  padding: 0.25em 1em;
  font-family: Poppins, sans-serif;
  max-height: 2em;
  text-align: center;
  line-height: 100%;
`

const ButtonDelete = styled(Button)`
  border: 2px solid ${(props) => props.theme.watermelon};
  color: ${(props) => props.theme.watermelon};
`

Button.defaultProps = {
  theme: theme,
}

ButtonDelete.defaultProps = Button.defaultProps

export { Button, ButtonDelete }
