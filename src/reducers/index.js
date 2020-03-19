import { combineReducers } from "redux";
import GalleryReducer from './gallery';
import ImageModalReducer from './imageModal';

const rootReducer = combineReducers({
  images: GalleryReducer,
  imageModal: ImageModalReducer
});
export default rootReducer;
