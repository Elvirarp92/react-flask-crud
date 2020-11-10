import React from 'react'
import { ListElement } from './../../molecules/index'

const UserList = ({ users, ...props }) => {

  return (
    <>
      { users.map((user) => (
        <ListElement key={user.id} id={user.id} name={user.username} company={user.company} refreshUsers={props.refreshUsers}/>
      ))}
    </>
  )
}

export { UserList }
