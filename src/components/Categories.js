import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesRequest, categoriesChange } from '../actions/actionCreators';

import Preloader from './Preloader';

export default function Categories() {
  const {
    list, loading, error, active,
  } = useSelector((state) => state.categories);
  const newList = [{
    id: 0,
    title: 'Все',
  }, ...list];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [dispatch]);

  const handleFilter = (e, id) => {
    e.preventDefault();
    dispatch(categoriesChange(id));
  };

  if (loading) return <Preloader />;
  if (error) return <p>Something went wrong</p>;

  return (
    <ul className="catalog-categories nav justify-content-center">
      {list && newList.map((item) => (
        <li className="nav-item" key={item.id}>
          <a className={item.id === active ? 'nav-link active' : 'nav-link'} href="#" onClick={(e) => handleFilter(e, item.id)}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
