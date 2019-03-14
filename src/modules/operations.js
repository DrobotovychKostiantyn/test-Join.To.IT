import axios from 'axios';
import * as actions from './actions';

const posts =
  'https://newsapi.org/v2/everything?q=bitcoin&from=2019-02-14&sortBy=publishedAt&apiKey=029c5747d423458a87af012bd279268b';

export const fetchSuccessPosts = () => async dispatch => {
  dispatch(actions.fetchPostsRequest);

  try {
    const response = await axios.get(posts);
    dispatch(actions.fetchPostsSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchPostsError(error));
  }
};

const images =
  'https://pixabay.com/api/?key=10077086-9241eba5f03654691e8006d03';

export const fetchSuccessImages = () => async dispatch => {
  dispatch(actions.fetchImagesRequest);

  try {
    const response = await axios.get(images);
    dispatch(actions.fetchImagesSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchImagesError(error));
  }
};
