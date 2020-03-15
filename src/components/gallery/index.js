import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap'

const Gallery = () => {

  return (
    <Row>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/70/100/100" />
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/844/100/100" />
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="https://picsum.photos/id/130/100/100" />
        </Card>
      </Col>
    </Row>
  );
}

export default Gallery