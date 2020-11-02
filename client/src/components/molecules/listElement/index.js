import React from 'react'
import { Text, TextBold, Button, ButtonDelete } from './../../atoms'

const ListElement = () => {
  return (
    <section>
      <TextBold>Nombre</TextBold>
      <Text>Empresa</Text>
      <Button>Detalles</Button>
      <Button>Editar</Button>
      <ButtonDelete>Borrar</ButtonDelete>
    </section>
  )
}

export { ListElement }
