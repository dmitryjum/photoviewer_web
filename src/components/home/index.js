import React from 'react';
import { Row, Col } from 'react-bootstrap'
import DimensionFilters from '../dimensionFilters'
import Gallery from '../gallery'
import { useDispatch } from 'react-redux'
import { requestImages } from '../../actions/gallery'

const Home = () => {
    const dispatch = useDispatch();
    dispatch(requestImages());
    
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

export default Home