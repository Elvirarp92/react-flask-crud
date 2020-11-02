import React from 'react'
import { GenericTemplate } from './../../templates/'
import { UserList } from '../../organisms/index'

const HomePage = () => {
  const userList = [
    { id: 1, username: 'pepito piscinas', company: 'piscinas inc.' },
    { id: 2, username: 'tipo de incógnito', company: 'incógnito ltd.' },
    { id: 3, username: 'aeiou', company: 'holla holla get some $$$' },
    { id: 4, username: 'manolo cabesahuevo', company: 'el de atrás ltd.' },
  ]

  console.log(`homepage userlist: ${userList}`)

  return (
    <GenericTemplate>
      <UserList users={userList} />
    </GenericTemplate>
  )
}

export { HomePage }
