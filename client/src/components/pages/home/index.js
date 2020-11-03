import React, { useState } from 'react'
import { GenericTemplate } from './../../templates/'
import { UserList, Header } from '../../organisms/'

const HomePage = ({...props}) => {

  return (
    <GenericTemplate>
      <Header />
      <UserList users={props.users} />
    </GenericTemplate>
  )
}

export { HomePage }
