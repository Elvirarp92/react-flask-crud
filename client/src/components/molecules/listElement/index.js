import React from 'react'
import axios from 'axios'
import { Text, TextBold, Button, ButtonDelete } from './../../atoms'
import { Container } from './styled'

const ListElement = ({ id, name, company, ...props }) => {
  const deleteUser = () => {
    axios
      .delete(`http://127.0.0.1:5000/users/${id}`)
      .then(() => props.refreshUsers())
      .catch((err) => console.log(err))
  }

  return (
    <Container>
      <TextBold>{name}</TextBold>
      <Text>{company}</Text>
      <Container>
        <Button>Detalles</Button>
        <Button>Editar</Button>
        <ButtonDelete onClick={deleteUser}>Borrar</ButtonDelete>
      </Container>
    </Container>
  )
}

export { ListElement }
