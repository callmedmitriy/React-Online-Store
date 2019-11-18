import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { itemsRequest } from '../actions/actionCreators';

import Categories from './Categories';
import Preloader from './Preloader';
import ItemSmallCard from './ItemSmallCard';

export default function Catalog() {
  const { list, loading, error } = useSelector((state) => state.hits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsRequest());
  }, [dispatch]);


  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <Categories />
      {loading && <Preloader />}
      {error && <p>Something went wrong</p>}
      <div className="row">
        {list && list.map((card) => <ItemSmallCard {...card} key={card.id} />)}
      </div>
    </section>
  );
}

/* use HOC to add search */
