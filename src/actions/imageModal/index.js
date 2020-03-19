import PVApi from '../../utils/api';
export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';
export const IMAGE_FETCH_ERROR = 'IMAGE_FETCH_ERROR';

export function openModal(id) {
  return (dispatch, getState) => {
    const thisImage = getState().images.records.find(i => i.id === parseInt(id))
    if (thisImage) {
      dispatch(openModalWithImageThunk({currentImage: thisImage, show: true}))
    } else {
      PVApi.getImage(id)
        .then(resp => {
          openModalWithImageThunk({currentImage: resp.data, show: true})
        })
        .catch(error => setFetchErrorThunk({error}))
    }
  }
}

export function closeModal() {
  return {
    type: MODAL_CLOSE
  }
}

const openModalWithImageThunk = payload => ({
  type: MODAL_OPEN,
  payload
})

const setFetchErrorThunk = payload => ({
  type: IMAGE_FETCH_ERROR,
  payload
});
