import types from './actionTypes';

export const fetchPostsRequest = () => ({
  type: types.FETCH_REQUEST_POSTS,
});

export const fetchPostsSuccess = data => ({
  type: types.FETCH_SUCCESS_POSTS,
  payload: {
    data,
  },
});

export const fetchPostsError = error => ({
  type: types.FETCH_ERROR_POSTS,
  payload: {
    error,
  },
});

export const fetchImagesRequest = () => ({
  type: types.FETCH_REQUEST_IMAGES,
});

export const fetchImagesSuccess = data => ({
  type: types.FETCH_SUCCESS_IMAGES,
  payload: {
    data,
  },
});

export const fetchImagesError = error => ({
  type: types.FETCH_ERROR_IMAGES,
  payload: {
    error,
  },
});
