import React from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import { useSelector } from "react-redux";

const Gallery = () => {
  let images = useSelector(state => state.images.records)

  return (
    <Row>
      {images.map((image, id) => (
        <Col key={id}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={`${image.url}/200/200`} />
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Gallery