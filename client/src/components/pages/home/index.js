import React, { useState } from 'react'
import { GenericTemplate } from './../../templates/'
import { UserList, Header } from '../../organisms/'

const HomePage = ({...props}) => {

  return (
    <GenericTemplate>
      <Header refreshUsers={props.refreshUsers}/>
      <UserList users={props.users} refreshUsers={props.refreshUsers}/>
    </GenericTemplate>
  )
}

export { HomePage }
