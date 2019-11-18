import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { itemsRequest } from '../actions/actionCreators';

import Categories from './Categories';
import Preloader from './Preloader';
import ItemSmallCard from './ItemSmallCard';

export default function Catalog(props) {
  const { mainPage } = props
  const { list, loading, error, search } = useSelector((state) => state.catalog);
  const activeCategory = useSelector((state) => state.categories.active);
  const dispatch = useDispatch();
  
  console.log('catalog active category',activeCategory)
  
  useEffect(() => {
    dispatch(itemsRequest(list.length, activeCategory, search));
  }, [dispatch]);

  const handlerChangeCategory = id => {
    console.log('change filter to',id)
    dispatch(itemsRequest(0, id, search));
  }

  const handlerMore = () => {
    dispatch(itemsRequest(list.length, activeCategory, search));
  }

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      
      {loading && <Preloader />}
      
      {error && <p>Something went wrong</p>}

      {!mainPage && <Search />}
      <Categories change={handlerChangeCategory}/>
      <div className="row">
        {list && list.map((card) => <ItemSmallCard {...card} key={card.id} />)}
      </div>
      <div className="text-center">
        <button className="btn btn-outline-primary" onClick={handlerMore}>Загрузить ещё</button>
      </div>
    </section>
  );
}

Catalog.propTypes = {
  mainPage: PropTypes.bool,
};


function Search() {
  return (
    <form className="catalog-search-form form-inline">
      <input className="form-control" placeholder="Поиск"/>
    </form>
  )
}

function More() {

  return (
    <div className="text-center">
      <button className="btn btn-outline-primary">Загрузить ещё</button>
    </div>
  )
}