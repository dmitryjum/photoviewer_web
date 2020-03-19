import { MODAL_OPEN, MODAL_CLOSE, IMAGE_FETCH_ERROR } from "../../actions/imageModal"

const initialState = {
  show: false,
  currentImage: {
    id: '',
    url: '',
    dimensions: []
  },
  error: null
}

export default function imageModal(state = initialState, action) {
  switch(action.type) {
    case MODAL_OPEN:
      return { ...state, ...action.payload };
    case MODAL_CLOSE:
      return {...state, ...initialState };
    case IMAGE_FETCH_ERROR:
      return {...state, ...action.payload}
    default:
      return state;
  }
}