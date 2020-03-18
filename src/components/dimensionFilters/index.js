import React, { useState, useEffect } from 'react'
import { ButtonGroup, Button, Row } from 'react-bootstrap'
import PVApi from "../../utils/api";
import { useDispatch } from "react-redux";
import { requestFilteredImages } from "../../actions/gallery";

const DimensionFilters = () => {
  const [dimensions, setDimensions] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
    PVApi.getDimensions().then(resp => setDimensions(resp.data.dimensions));
  }, [setDimensions])

  

  return (
    <Row>
      <ButtonGroup vertical>
        {
          dimensions.map((dim, id) => (
            <Button
              key={id}
              size="lg"
              onClick={() => dispatch(requestFilteredImages({dimensions: dim}))}
            >
                {dim}
            </Button>
          ))
        }
      </ButtonGroup>
    </Row>
  );
}

export default DimensionFilters