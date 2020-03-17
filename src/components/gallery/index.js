import React, { useEffect } from 'react';
import { Row, Col, Card, Spinner } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";
import { requestImages, addMoreImages } from "../../actions/gallery";

const Gallery = () => {
  const images = useSelector(state => state.images.records)
  const loading = useSelector(state => state.images.loading)
  const galleryPage = useSelector(state => state.images.galleryPage)
  const totalPages = useSelector(state => state.images.totalPages)
  const entriesCount =  useSelector(state => state.images.entriesCount)
  const onScrollCb = onScroll.bind(this)

  const dispatch = useDispatch();

  function onScroll(e, loadedImagesCount, entriesCount) {
    e.stopPropagation()
    // const currentCur = window.innerHeight + document.documentElement.scrollTop;
    // const windowHeight = document.documentElement.offsetHeight;
    console.log("images length", loadedImagesCount)
    console.log("entriesCount", entriesCount)
    if (loadedImagesCount < entriesCount && window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      console.log('gallery page', galleryPage)
      dispatch(addMoreImages());
    }
  }
  
  useEffect(() => {
    if (totalPages === null) { dispatch(requestImages()) }
    window.addEventListener("scroll", (e) => onScrollCb(e, images.length, entriesCount));
    return () => {
      window.removeEventListener("scroll", (e) => onScrollCb(e, images.length, entriesCount));
    }
    
  }, [dispatch, totalPages, entriesCount, images.length, onScrollCb])

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