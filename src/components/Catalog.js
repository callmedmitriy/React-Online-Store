import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { itemsRequest, changeSearchField } from '../actions/actionCreators';

import Categories from './Categories';
import Preloader from './Preloader';
import ItemSmallCard from './ItemSmallCard';

export default function Catalog(props) {
  const { mainPage } = props;
  const {
    list, loading, error, search, more,
  } = useSelector((state) => state.catalog);
  const activeCategory = useSelector((state) => state.categories.active);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemsRequest(list.length, activeCategory, search));
  }, [dispatch, search, activeCategory]);


  const handleChangeSearch = ({ target }) => {
    dispatch(changeSearchField(target.value));
  };

  const handlerMore = () => {
    dispatch(itemsRequest(list.length, activeCategory, search));
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>

      {!mainPage && (
        <form className="catalog-search-form form-inline">
          <input className="form-control" placeholder="Поиск" value={search} onChange={handleChangeSearch} />
        </form>
      )}

      <Categories />

      {error && <p>Something went wrong</p>}
      {loading && <Preloader />}
      <div className="row">
        {list && list.map((card) => <ItemSmallCard {...card} key={card.id} />)}
      </div>

      {more && (
        <div className="text-center">
          <button className="btn btn-outline-primary" onClick={handlerMore}>Загрузить ещё</button>
        </div>
      )}
    </section>
  );
}

Catalog.propTypes = {
  mainPage: PropTypes.bool,
};
