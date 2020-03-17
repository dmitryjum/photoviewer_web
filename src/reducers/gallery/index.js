import { REQUEST_IMAGES, SET_FILTER, ADD_IMAGES, LOADING } from "../../actions/gallery";

const initialState = {
  records: [],
  galleryPage: 1,
  perPage: 10,
  filter: {},
  loading: false,
  totalPages: null,
  entriesCount: null
}

export default function images(state = initialState, action) {
  switch (action.type) {
    case REQUEST_IMAGES:
      return {
        ...state,
        totalPages: action.payload.data.pages_per_limit,
        records: action.payload.data.records,
        entriesCount: action.payload.data.entries_count
      };
    case SET_FILTER:
      return {
        ...state, filter: action.payload.filter, galleryPage: 1
      };
    case ADD_IMAGES:
      return {
        ...state,
        galleryPage: action.payload.data.page,
        totalPages: action.payload.data.pages_per_limit,
        entriesCount: action.payload.data.entries_count,
        records: state.records.concat(action.payload.data.records)
      }
    case LOADING:
      return {
        ...state,
        loading: action.payload.loading
      }
    default:
      return state;
  }
}