import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { requestImages } from "../../actions/gallery";

const Gallery = () => {
  let images = useSelector(state => state.images.records)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    dispatch(requestImages());
  }, [dispatch])

  function loadingSpinner() {
    if (loading) {
      return (
        <Row>
          <Col md={{ span: 2, offset: 5 }}>
            <Spinner animation="grow" variant="info" />
          </Col>
        </Row>
      );
    }
  }

  return (
    <>
      <Row>
        {images.map((image, id) => (
          <Col key={id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`${image.url}/200/200`} />
            </Card>
          </Col>
        ))}
      </Row>
      {loadingSpinner()}
    </>
  );
}

export default Gallery


// window.innerHeight + document.documentElement.scrollTop ===
//   document.documentElement.offsetHeight;