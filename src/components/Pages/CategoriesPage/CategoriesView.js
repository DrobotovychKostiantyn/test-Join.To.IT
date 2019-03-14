import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CategoriesView.module.css';

const heightImg = id => (id % 2 === 0 ? s.img : s.smallImg);

const CategoriesView = ({ categories, images, loading, error }) => (
  <div className={s.wrapper}>
    {loading && <h2>loading....</h2>}
    {error && <h2>Try again!</h2>}
    {categories && (
      <ul className={s.list}>
        {categories.map((category, idx) => (
          <li className={s.listItem} key={category}>
            <NavLink to={`/posts/${category.toLowerCase()}`} className={s.link}>
              <img className={heightImg(idx)} src={images[idx]} alt="img" />
              <h2 className={s.category}>{category}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default CategoriesView;
