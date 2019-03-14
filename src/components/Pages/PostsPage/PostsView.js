import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './PostsView.module.css';

const PostView = ({ post = 'nooooooo', loading, error, handleBtn }) => (
  <div className={s.wrapper}>
    <NavLink to="/posts" className={s.linkBack}>
      &#60;
    </NavLink>
    <div className={s.postBlock}>
      {loading && <h2>loading....</h2>}
      {error && <h2>Try again!</h2>}
      <p>
        {post}Ut leo. Fusce ac felis sit amet ligula pharetra condimentum. Donec
        mollis hendrerit risus. Morbi nec metus. Cras varius.
      </p>
      <button type="button" className={s.btn} onClick={handleBtn}>
        New post
      </button>
    </div>
  </div>
);

export default PostView;
