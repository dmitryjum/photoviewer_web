import React, { useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { requestImages } from "../../actions/gallery";

const Gallery = () => {
  let images = useSelector(state => state.images.records)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestImages());
  }, [dispatch])

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