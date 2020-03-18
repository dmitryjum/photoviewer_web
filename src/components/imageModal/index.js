import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './index.css'

function ImageModal() {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="modal-image" alt="" src="https://picsum.photos/id/634/640/480" />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageModal;