import React from 'react'
import { Text, TextBold, Button, ButtonDelete } from './../../atoms'
import { Container } from './styled'

const ListElement = () => {
  return (
    <Container>
      <TextBold>Nombre</TextBold>
      <Text>Empresa</Text>
      <Container>
        <Button>Detalles</Button>
        <Button>Editar</Button>
        <ButtonDelete>Borrar</ButtonDelete>
      </Container>
    </Container>
  )
}

export { ListElement }
