import React, { useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal } from "../../actions/imageModal";
import { useParams } from 'react-router-dom'
import './index.css'

function ImageModal() {
  const dispatch = useDispatch()
  const modalShow = useSelector(state => state.imageModal.show)
  const currentImage = useSelector(state => state.imageModal.currentImage)
  const fetchError = useSelector(state => state.imageModal.error)

  const params = useParams()
  const imageId = params["id"]

 useEffect(() => {
    if (imageId) {
      dispatch(openModal(imageId))
    }
  }, [dispatch, imageId])

  function renderImageOrError() {
    if (fetchError) {
      return (
        <><h1>{fetchError}</h1></>
      )
    } else {
      return (
        <><img className="modal-image" alt="" src={`${currentImage.url}/640/480`} /></>
      )
    }
  }

  return (
    <Modal
      show={modalShow}
      onHide={() => dispatch(closeModal())}
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
        {renderImageOrError()}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => dispatch(closeModal())}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ImageModal;