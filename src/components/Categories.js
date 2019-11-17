import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { categoriesRequest } from '../actions/actionCreators'

import Preloader from './Preloader'

export default function Categories() {
  const { list, loading, error } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoriesRequest())
  }, [dispatch])

  const handleFilter = ({target}) => {
    console.log(target.value)
  }

  if (loading) return <Preloader/>
  if (error) return <p>Something went wrong</p>

  /*
    Разобразться с классом active
  */

  return (
    <ul class="catalog-categories nav justify-content-center">
      <li class="nav-item">
          <a class="nav-link active" href="#">Все</a>
      </li>
      {list && list.map(item => (
        <li className="nav-item" key={item.id}>
            <a class="nav-link" href="#" onClick={handleFilter}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}