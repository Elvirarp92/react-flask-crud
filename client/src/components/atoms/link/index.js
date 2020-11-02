import React from 'react'
import { HrefLink, ReactLink } from './styled'
const Link = ({ ...props }) => {
  if (props.to) {
    return <ReactLink {...props} />
  } else {
    return <HrefLink {...props} />
  }
}

export { Link }
