import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CategoriesView.module.css';

const CategoriesView = ({ categories, images, loading, error }) => (
  <div className={s.wrapper}>
    {loading && <h2>loading....</h2>}
    {error && <h2>Try again!</h2>}
    {categories && (
      <ul className={s.list}>
        {categories.map((category, idx) => (
          <li className={s.listItem} key={category}>
            <NavLink to={`/posts/${category.toLowerCase()}`} className={s.link}>
              <img className={s.img} src={images[idx]} alt="img" />
              <h2 className={s.category}>{category}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default CategoriesView;
