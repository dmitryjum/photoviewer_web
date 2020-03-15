import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap'
import DimensionFilters from '../dimensionFilters'
import Gallery from '../gallery'

class Home extends Component {
  render() {
    return(
      <Row>
        <Col xs lg="1">
          <DimensionFilters />
        </Col>
        <Col>
          <Gallery />
        </Col>
      </Row>
    )
  }
}

export default Home