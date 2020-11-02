import React from 'react'
import { Text, TextBold, Button, ButtonDelete } from './../../atoms'
import { Container } from './styled'

const ListElement = ({ name, company }) => {
  return (
    <Container>
      <TextBold>{name}</TextBold>
      <Text>{company}</Text>
      <Container>
        <Button>Detalles</Button>
        <Button>Editar</Button>
        <ButtonDelete>Borrar</ButtonDelete>
      </Container>
    </Container>
  )
}

export { ListElement }
