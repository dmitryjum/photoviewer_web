import React, { useEffect } from 'react';
import { Row, Col, Card, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { requestImages, addMoreImages } from "../../actions/gallery";

const Gallery = () => {
  let images = useSelector(state => state.images.records)
  let loading = useSelector(state => state.images.loading)
  let galleryPage = useSelector(state => state.images.galleryPage)
  let totalPages = useSelector(state => state.images.totalPages)

  const dispatch = useDispatch();

  useEffect(() => {
    function onScroll() {
      const currentCur = window.innerHeight + document.documentElement.scrollTop;
      const windowHeight = document.documentElement.offsetHeight;
      if (currentCur === windowHeight && galleryPage < totalPages) {
        dispatch(addMoreImages());
      }
    }

    dispatch(requestImages());
    window.addEventListener("scroll", onScroll);
  }, [dispatch, galleryPage, totalPages])

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