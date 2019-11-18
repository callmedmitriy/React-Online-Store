import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesRequest, categoriesChange } from '../actions/actionCreators';

import Preloader from './Preloader';

export default function Categories() {
  const { list, loading, error } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesRequest());
  }, [dispatch]);

  const handleFilter = id => {
    dispatch(categoriesChange(id));
  };

  if (loading) return <Preloader />;
  if (error) return <p>Something went wrong</p>;

  /*
    Разобразться с классом active
  */

  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" onClick={() => handleFilter(0)}>Все</a>
      </li>
      {list && list.map((item) => (
        <li className="nav-item" key={item.id}>
          <a className="nav-link" onClick={() => handleFilter(item.id)}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}
