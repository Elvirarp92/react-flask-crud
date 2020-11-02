import React from 'react'
import { ListElement } from './../../molecules/index'

const UserList = ({ users }) => {

  console.log(users)

  return (
    <>
      { users.map((user) => (
        <ListElement key={user.id} name={user.username} company={user.company} />
      ))}
    </>
  )
}

export { UserList }
