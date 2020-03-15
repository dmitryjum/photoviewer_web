import { combineReducers } from "redux";
import GalleryReducer from './gallery'

const rootReducer = combineReducers({
  images: GalleryReducer
});
export default rootReducer;
