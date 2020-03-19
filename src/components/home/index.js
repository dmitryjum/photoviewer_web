import React, { useEffect } from 'react';
import DimensionFilters from '../dimensionFilters'
import Gallery from '../gallery'
import ImageModal from '../imageModal';
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { openModal } from "../../actions/imageModal";

const Home = () => {
  const dispatch = useDispatch()
  const params = useParams()
  const imageId = params["id"]

  useEffect(() => {
    if (imageId) {
      dispatch(openModal(imageId))
    }
  }, [dispatch, imageId])

  // if (params["id"]) {
  //   dispatch(openModal(params["id"]))
  // }

  return(
    <>
      <DimensionFilters />
      <Gallery />
      <ImageModal />
    </>
  )
}

export default Home