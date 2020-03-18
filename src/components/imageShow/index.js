import React from 'react';
import { Row, Image } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ImageShow = (props) => {
  const id = props.match.params.id;
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