import React, { useEffect, useCallback, useState } from 'react';
import { Row, Col, Card, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { requestImages, addMoreImages } from "../../actions/gallery";

const Gallery = () => {
  const images = useSelector(state => state.images.records)
  const loading = useSelector(state => state.images.loading)
  const entriesCountInDB =  useSelector(state => state.images.entriesCount)
  const loadedImagesCount = images.length
  const [paintedImagesCount, setPaintedImagesCount] = useState(0)

  const dispatch = useDispatch();

  const onScrollHandler = useCallback((e) => {
    e.stopPropagation()
    const currentCur = window.innerHeight + document.documentElement.scrollTop;
    const windowHeight = document.documentElement.offsetHeight;
    if (loading === false && loadedImagesCount < entriesCountInDB && currentCur === windowHeight) {
      dispatch(addMoreImages());
    }
  }, [dispatch, loading, loadedImagesCount, entriesCountInDB])
  
  useEffect(() => {
    if (entriesCountInDB === null) {
       dispatch(requestImages())
    }
    const windowHeight = window.innerHeight;
    const galleryLoadedHeight = document.getElementById('gallery').offsetHeight;
    if (loadedImagesCount > 0 && loadedImagesCount === paintedImagesCount &&
      windowHeight > galleryLoadedHeight && loading === false) {
      dispatch(addMoreImages())
    }
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    }
    
  }, [dispatch, onScrollHandler, entriesCountInDB, paintedImagesCount, loadedImagesCount, loading])

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
      <Row id="gallery">
        {images.map((image, id) => (
          <Col key={id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={`${image.url}/200/200`} onLoad={() => setPaintedImagesCount(paintedImagesCount + 1)} />
            </Card>
          </Col>
        ))}
      </Row>
      {loadingSpinner()}
    </>
  );
}

export default Gallery