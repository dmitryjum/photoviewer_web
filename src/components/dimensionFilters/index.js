import React, { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap'
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
    <Nav variant="pills" defaultActiveKey="/">
      <Nav.Item key={0}>
        <Nav.Link eventKey="0" href="/">Home</Nav.Link>
      </Nav.Item>
      {
        dimensions.map((dim, id) => (
          <Nav.Item key={id + 1}>
            <Nav.Link
              eventKey={id + 1}
              onClick={() => {
                dispatch(requestFilteredImages({dimensions: dim}))
              }}
            >
                {dim}
            </Nav.Link>
          </Nav.Item>
        ))
      }
    </Nav>
  );
}

export default DimensionFilters