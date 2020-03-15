import PVApi from '../../utils/api';
export const REQUEST_IMAGES = 'REQUEST_IMAGES';

export function requestImages(params = {}) {
  return (dispatch, getState) => {
    params = {
      ...params,
      'page': getState().images.galleryPage,
      'per_page': getState().images.perPage
    };

    PVApi.getImages(params)
      .then(resp => {
        dispatch(requestImagesThunk(resp))
      })
      .catch(error => imagesFetchError(error))
  }
}

const requestImagesThunk = payload => ({
  type: REQUEST_IMAGES,
  payload
})

function imagesFetchError(error) {
  console.log("errors fetching images: ", error)
}