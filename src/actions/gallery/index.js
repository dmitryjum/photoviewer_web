import PVApi from '../../utils/api';
export const REQUEST_IMAGES = 'REQUEST_IMAGES';
export const SET_FILTER = 'SET_FILTER';
export const ADD_IMAGES = 'ADD_IMAGES';
export const LOADING = 'LOADING';

export function requestImages(params = {}) {
  return (dispatch, getState) => {
    params = {
      ...params,
      ...getState().images.filter,
      'page': getState().images.galleryPage,
      'per_page': getState().images.perPage
    };
    PVApi.getImages(params)
      .then(resp => {
        dispatch(requestImagesThunk(resp))
      })
      .catch(error => imagesFetchError(error))
  }
};

export function requestFilteredImages(params = {}) {
  return (dispatch) => {
    dispatch(setFilterThunk({filter: params}));
    dispatch(requestImages())
  }
};

export function addMoreImages(params = {}) {
  return (dispatch, getState) => {
    params = {
      ...getState().images.filter,
      'page': getState().images.galleryPage + 1,
      'per_page': getState().images.perPage
    };
    dispatch(setLoadingSpinnerThunk({loading: true}))
    PVApi.getImages(params)
      .then(resp => {
        dispatch(addImagesThunk({...resp, galleryPage: params.page }));
        dispatch(setLoadingSpinnerThunk({loading: false}))
      })
      .catch(error => imagesFetchError(error))
  }
}

const setLoadingSpinnerThunk = payload => ({
  type: LOADING,
  payload
})

const addImagesThunk = payload => ({
  type: ADD_IMAGES,
  payload
})

const setFilterThunk = payload => ({
  type: SET_FILTER,
  payload
});

const requestImagesThunk = payload => ({
  type: REQUEST_IMAGES,
  payload
});

function imagesFetchError(error) {
  console.log("errors fetching images: ", error)
};