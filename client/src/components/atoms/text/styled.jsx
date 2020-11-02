import './../../../utils/fonts.css'
import styled from 'styled-components'

const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  line-height: 150%;
  font-weight: 200;
  margin: 0px 8px;
`
const TextBold = styled(Text)`
  font-weight: 400;
`

export { Text, TextBold }
