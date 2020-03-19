import React from 'react';
import DimensionFilters from '../dimensionFilters'
import Gallery from '../gallery'
import ImageModal from '../imageModal';

const Home = () => {

  return(
    <>
      <DimensionFilters />
      <Gallery />
      <ImageModal />
    </>
  )
}

export default Home