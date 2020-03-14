import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap'

export default function ScrollingModal({ isOpen, toggle, title, body }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLongTitle">
          {title}
        </h5>
        <button
          type="button"
          className="close"
          style={{ marginBottom: 15 }}
          data-dismiss="modal"
          aria-hidden="true"
          onClick={toggle}
        >
          <i className="tim-icons icon-simple-remove" />
        </button>
      </div>
      <ModalBody>
        {body}
      </ModalBody>
      <ModalFooter className="margin-left">
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  )
}