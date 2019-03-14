import types from '../actionTypes';

const postsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_SUCCESS_POSTS:
      return payload.data.articles.map(item => item.title);
    default:
      return state;
  }
};

export default postsReducer;
