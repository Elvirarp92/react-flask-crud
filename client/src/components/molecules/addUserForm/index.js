import React from 'react'
import { useInput } from './../../../hooks/useInput'
import { Title1, Button, Input, Label } from './../../atoms'
import { Form, FormWrapper } from './styled'

const AddUserForm = () => {
  const [username, setUsername] = useInput('')
  const [email, setEmail] = useInput('')
  const [password, setPassword] = useInput('')
  const [company, setCompany] = useInput('')

  function handleSubmit(e) {
    e.preventDefault()
    console.log(username, email, password, company)
  }

  return (
    <div>
      <Title1>Añadir usuario</Title1>
      <Form onSubmit={handleSubmit}>
        <FormWrapper>
          <Label for='username'>Username</Label>
          <Input
            type='text'
            name='username'
            id='username'
            value={username}
            onChange={setUsername}
          />
          <Label for='email'>Email</Label>
          <Input type='email' name='email' id='email' value={email} onChange={setEmail} />
          <Label for='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={setPassword}
          />
          <Label for='company'>Company</Label>
          <Input type='text' name='company' id='company' value={company} onChange={setCompany} />
        </FormWrapper>
        <Button type='submit'>Crear</Button>
      </Form>
    </div>
  )
}

export { AddUserForm }