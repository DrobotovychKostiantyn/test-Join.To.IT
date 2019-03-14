import types from '../actionTypes';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS_IMAGES:
      return payload.data.hits.map(item => item.webformatURL);
    default:
      return state;
  }
};

export default postsReducer;
