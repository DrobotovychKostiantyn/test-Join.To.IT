import types from '../actionTypes';

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case types.FETCH_REQUEST_POSTS:
    case types.FETCH_REQUEST_IMAGES:
      return true;

    case types.FETCH_SUCCESS_POSTS:
    case types.FETCH_ERROR_POSTS:
    case types.FETCH_SUCCESS_IMAGES:
    case types.FETCH_ERROR_IMAGES:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;
