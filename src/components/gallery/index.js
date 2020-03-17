import React, { useEffect, useCallback } from 'react';
import { Row, Col, Card, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { requestImages, addMoreImages } from "../../actions/gallery";

const Gallery = () => {
  const images = useSelector(state => state.images.records)
  const loading = useSelector(state => state.images.loading)
  const entriesCountInDB =  useSelector(state => state.images.entriesCount)
  const loadedImagesCount = images.length

  const dispatch = useDispatch();

  const onScrollHandler = useCallback((e) => {
    e.stopPropagation()
    const currentCur = window.innerHeight + document.documentElement.scrollTop;
    const windowHeight = document.documentElement.offsetHeight;
    console.log('loaded images count', loadedImagesCount);
    console.log('entries count', entriesCountInDB);
    console.log('loading', loading)
    if (loading === false && loadedImagesCount < entriesCountInDB && currentCur === windowHeight) {
      dispatch(addMoreImages());
    }
  }, [dispatch, loading, loadedImagesCount, entriesCountInDB])
  
  useEffect(() => {
    if (entriesCountInDB === null) { dispatch(requestImages()) }
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    }
    
  }, [dispatch, onScrollHandler, entriesCountInDB])

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