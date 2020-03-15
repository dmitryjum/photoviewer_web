import React, { useState, useEffect } from 'react'
import { ButtonGroup, Button, Row } from 'react-bootstrap'
import PVApi from "../../utils/api";

const DimensionFilters = () => {
  const [dimensions, setDimensions] = useState([])
  useEffect(() => {
    PVApi.getDimensions().then(resp => {
      setDimensions(resp.data.dimensions)
    });
  }, [setDimensions])

  return (
    <Row>
      <ButtonGroup vertical>
        {
          dimensions.map((dim, id) => (
            <Button key={id} size="lg">{dim}</Button>
          ))
        }
      </ButtonGroup>
    </Row>
  );
}

export default DimensionFilters