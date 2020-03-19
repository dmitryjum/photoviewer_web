import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal } from "../../actions/imageModal";
import { useParams, useLocation, useHistory } from 'react-router-dom'
import './index.css'

function ImageModal() {
  const dispatch = useDispatch()
  const modalShow = useSelector(state => state.imageModal.show)
  const currentImage = useSelector(state => state.imageModal.currentImage)
  const fetchError = useSelector(state => state.imageModal.error)
  const [toggleGrayScale, setToggleGrayScale] = useState(false);

  const params = useParams()
  const imageId = params["id"]
  const location = useLocation()
  const history = useHistory();
  useEffect(() => {
    if (imageId) {
      dispatch(openModal(imageId))
    }

    if (location.search === "?grayscale") {
      setToggleGrayScale(true)
    }
  }, [dispatch, imageId, setToggleGrayScale, location.search])

  function grayscaleImage() {
    if (toggleGrayScale) { return 'grayscale'}
  }
  
  const closeModalHandler = () => {
    dispatch(closeModal());
    history.push('/');
  }

  function renderImageOrError() {
    if (fetchError) {
      return (
        <><h1>{fetchError}</h1></>
      )
    } else {
      return (
        <><img className="modal-image" alt="" src={`${currentImage.url}/900/400`} /></>
      )
    }
  }

  return (
    <div className={`image-lightbox ${modalShow ? 'show' : ''}`}>
      <div className={`image-lightbox__content ${grayscaleImage()}`}>
        <span className="close-lightbox" onClick={closeModalHandler}
        ></span>
        <span className="grayscale-button" onClick={() => setToggleGrayScale(!toggleGrayScale)}></span>
        <div className="lightbox-image-container">
          {renderImageOrError()}
        </div>
      </div>
    </div>
  );
}

export default ImageModal;