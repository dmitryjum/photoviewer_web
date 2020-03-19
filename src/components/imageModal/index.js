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
  const [customFilter, setCustomFilter] = useState("900/400")

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
        <><img className="modal-image" alt="" src={`${currentImage.url}/${customFilter}`} /></>
      )
    }
  }
  
  return (
    <div className={`image-lightbox ${modalShow ? 'show' : ''}`}>
      <div className={`image-lightbox__content ${toggleGrayScale ? 'grayscale' : ''}`}>
        <span className="close-lightbox" onClick={closeModalHandler}
        ></span>
        <span className="grayscale-button" onClick={() => setToggleGrayScale(!toggleGrayScale)}></span>
        <div className="dimension-buttons">
          {
            currentImage.dimensions.map((d, id) => {
              return (
                <span key={id} onClick={() => setCustomFilter(d)} className="dimension-button">{d}</span>
              )
            })
          }
        </div>
        <div className="lightbox-image-container">
          {renderImageOrError()}
        </div>
      </div>
    </div>
  );
}

export default ImageModal;