import React from 'react';
import { Row, Col } from 'react-bootstrap'
import DimensionFilters from '../dimensionFilters'
import Gallery from '../gallery'


const Home = () => {
    
    return(
      <Row>
        <Col xs lg="1">
          <DimensionFilters />
        </Col>
        <Col xs lg="11">
          <Gallery />
        </Col>
      </Row>
    )
}

export default Home