import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './index.css'

const ImageShow = (props) => {
  const id = props.match.params.id;
  let images = useSelector(state => state.images.records)
  const thisImage = images.find(image => {
    return image.id === parseInt(id)
  })
  const grayscale = props.location.search === '?grayscale' ? 'grayscale' : ''
  if (thisImage !== undefined) {
    return (
      <Row>
        <img alt="" className={grayscale} src={`${thisImage.url}/640/480`} />
      </Row>
    )
  } else {
    return (
      <Row></Row>
    )
  }
}

export default ImageShow