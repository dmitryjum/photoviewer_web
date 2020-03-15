import { REQUEST_IMAGES } from "../../actions/gallery";

const initialState = {
  records: [],
  galleryPage: 1,
  perPage: 10
}

export default function images(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGES:
      return {
        ...state, records: action.payload.data.records
      };
    default:
      return state;
  }
}