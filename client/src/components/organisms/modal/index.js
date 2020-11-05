import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from './../../atoms'
import { ModalOverlay, ModalWrapper, ModalBox, ModalHeader, ModalContent } from './styled'

const Modal = ({ isShowing, hide, children, ...props }) => {
  function renderModal() {
    return isShowing ? (
      <React.Fragment>
        <ModalOverlay>
          <ModalWrapper>
            <ModalBox>
              <ModalHeader>
                <Button onClick={hide}>Cerrar</Button>
              </ModalHeader>
              <ModalContent>{children}</ModalContent>
            </ModalBox>
          </ModalWrapper>
        </ModalOverlay>
      </React.Fragment>
    ) : null
  }

  return ReactDOM.createPortal(renderModal(), document.body)
}

export { Modal }
