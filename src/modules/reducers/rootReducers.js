import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import imagesReducer from './imagesReducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  posts: postsReducer,
  images: imagesReducer,
  loading: loadingReducer,
  error: errorReducer,
});
