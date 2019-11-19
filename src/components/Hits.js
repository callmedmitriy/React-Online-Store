import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hitsListRequest } from '../actions/actionCreators';

import Preloader from './Preloader';
import ItemSmallCard from './ItemSmallCard';

export default function Hits() {
  const { list, loading, error } = useSelector((state) => state.hits);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hitsListRequest());
  }, [dispatch]);

  return (
    <section className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      {loading && <Preloader />}
      {error && <p>Something went wrong</p>}

      <div className="row">
        {list && list.map((card) => <ItemSmallCard {...card} key={card.id} />)}
      </div>
    </section>
  );
}
