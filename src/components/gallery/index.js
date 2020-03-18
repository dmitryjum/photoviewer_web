import React, { useEffect, useCallback } from 'react';
import { Row, Col, Card, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { requestImages, addMoreImages, imagePainted } from "../../actions/gallery";
import { Link } from 'react-router-dom';

const Gallery = () => {
  const images = useSelector(state => state.images.records)
  const loading = useSelector(state => state.images.loading)
  const entriesCountInDB =  useSelector(state => state.images.entriesCount)
  const paintedImagesCount = useSelector(state => state.images.paintedImagesCount)
  const loadedImagesCount = images.length

  const dispatch = useDispatch();

  const onScrollHandler = useCallback((e) => {
    e.stopPropagation()
    const currentCur = window.innerHeight + document.documentElement.scrollTop;
    const offSetHeight = document.documentElement.offsetHeight;
    // if nothing is currently being loaded over ajax;
    // there are less images loaded than there are total in collection per request
    // if document height is the same as window height + how much you've scrolled,
    // that means you've scrolled to the bottom
    if (loading === false && loadedImagesCount < entriesCountInDB && currentCur === offSetHeight) {
      dispatch(addMoreImages());
    }
  }, [dispatch, loading, loadedImagesCount, entriesCountInDB])
  
  useEffect(() => {
    if (entriesCountInDB === null) {
       dispatch(requestImages())
    }
    const windowHeight = window.innerHeight;
    const galleryLoadedHeight = document.getElementById('gallery').offsetHeight;
    // Should load more images, if the first page loaded less images than the size of the screen and there's no scroll
    // if the count of loaded images greater than 0;
    // if the count of loaded images finally equal to the count of images visibally painted on the screen;
    // if total height of current window is greater than height of the gallery;
    // if nothing is currently loading;
    // if the count of loaded images is still less than the there are total images in collection per request
    if (loadedImagesCount > 0 && loadedImagesCount === paintedImagesCount &&
      windowHeight > galleryLoadedHeight && loading === false && loadedImagesCount < entriesCountInDB) {
      dispatch(addMoreImages())
    }
    window.addEventListener("scroll", onScrollHandler); // set the handler and get all the current state
    return () => {
      window.removeEventListener("scroll", onScrollHandler);// remove the handler in order to get fresh state next time
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
              <Link to={`/images/${image.id}`}>
                <Card.Img variant="top" src={`${image.url}/200/200`} onLoad={() => dispatch(imagePainted())} />
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
      {loadingSpinner()}
    </>
  );
}

export default Gallery