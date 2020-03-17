import React from 'react';
import { Row, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ImageShow = () => {
  let { id } = useParams();

  let images = useSelector(state => state.images.records)
  const thisImage = images.find(image => {
    return image.id === parseInt(id)
  })
  console.log(thisImage)
  if (thisImage !== undefined) {
    return (
      <Row>
        <Image src={`${thisImage.url}/640/480`} fluid />
      </Row>
    )
  } else {
    return (
      <Row></Row>
    )
  }
}

export default ImageShow