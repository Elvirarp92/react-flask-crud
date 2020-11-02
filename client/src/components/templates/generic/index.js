import React from 'react'
import { TemplateWrapper, Content } from './styled'

const GenericTemplate = ({ children, ...props }) => {
  return (
    <TemplateWrapper {...props}>
      <Content>{children}</Content>
    </TemplateWrapper>
  )
}

export { GenericTemplate }
