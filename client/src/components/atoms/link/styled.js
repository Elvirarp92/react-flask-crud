import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './../../../utils/fonts.css'
import { theme } from './../../../utils/constants'

const HrefLink = styled.a`
  display: block;
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

const ReactLink = styled(Link)`
  display: block;
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

HrefLink.defaultProps = ReactLink.defaultProps = {
  theme: theme,
}

export { HrefLink, ReactLink }
