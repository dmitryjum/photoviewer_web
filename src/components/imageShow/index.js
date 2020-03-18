import React, { useState, useEffect, useCallback } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './index.css'
import PVApi from '../../utils/api';


const ImageShow = (props) => {

  const [currentImage, setCurrentImage] = useState("")
  const [errors, setErrors] = useState(null)
  const id = props.match.params.id;
  const images = useSelector(state => state.images.records)
  const grayscale = props.location.search === '?grayscale' ? 'grayscale' : ''

  const getImage = useCallback(() => {
    const thisImage = images.find(image => image.id === parseInt(id))
    if (thisImage === undefined) {
      PVApi.getImage(id)
        .then(resp => {
          setCurrentImage(resp.data)
        })
        .catch(error => {
          setErrors(error.response.data.error)
        })
    } else {
      setCurrentImage(thisImage)
    }
  }, [id, images])

  useEffect(() => {
    getImage(id)
  }, [getImage, id])

  function renderImageOrError() {
    if(errors) {
      return (
        <>
          <h1>{errors}</h1>
        </>
      )
    } else {
      return (
        <>
          <img alt="" className={grayscale} src={`${currentImage.url}/640/480`} />
        </>
      )
    }
  }

  return(
    <Row>
      {renderImageOrError()}
    </Row>
  )

}

export default ImageShow