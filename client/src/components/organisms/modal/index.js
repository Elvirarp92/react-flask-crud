import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './../../atoms'
import { ModalOverlay, ModalWrapper, ModalBox, ModalHeader, ModalContent } from './styled'

const Modal = ({ children, ...props }) => {
  
  const childrenWithModalControlProps = React.cloneElement(children, {
    isShowing: props.isShowing,
    hide: props.hide,
    refreshUsers: props.refreshUsers,
  })

  function renderModal() {
    return props.isShowing ? (
      <React.Fragment>
        <ModalOverlay>
          <ModalWrapper>
            <ModalBox>
              <ModalHeader>
                <Button onClick={props.hide}>Cerrar</Button>
              </ModalHeader>
              <ModalContent
                isShowing={props.isShowing}
                hide={props.hide}
                refreshUsers={props.refreshUsers}>
                {childrenWithModalControlProps}
              </ModalContent>
            </ModalBox>
          </ModalWrapper>
        </ModalOverlay>
      </React.Fragment>
    ) : null
  }

  return ReactDOM.createPortal(renderModal(), document.body)
}

export { Modal }
