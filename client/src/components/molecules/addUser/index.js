import React from 'react'
import { Button } from './../../atoms'

const AddUser = ({ action }) => {
  return (<Button onClick={action}>Añadir</Button>)
}

export { AddUser }
