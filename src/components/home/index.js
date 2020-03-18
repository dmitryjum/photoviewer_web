import React from 'react';
import { Row, Col } from 'react-bootstrap'
import DimensionFilters from '../dimensionFilters'
import Gallery from '../gallery'


const Home = () => {
    
    return(
      <>
        <DimensionFilters />
        <Row>
          <Col xs lg="12">
            <Gallery />
          </Col>
        </Row>
      </>
    )
}

export default Home