import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { changeSearchField } from '../actions/actionCreators';

export default function Control(props) {
  const [showForm, setShowForm] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const currentUrl = props.location.pathname;
  const { search } = useSelector((state) => state.catalog);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (showForm) {
      setRedirect(true);
    }
    setShowForm(!showForm);
  };

  const handleChange = ({ target }) => {
    dispatch(changeSearchField(target.value));
  };

  /*
    TODO:
    handler for cart
    data for cart
  */

  if (currentUrl !== '/catalog' && redirect) {
    return <Redirect to="/catalog" />;
  } if (currentUrl === '/catalog' && redirect) {
    setRedirect(false);
  }

  return (
    <div>
      <div className="header-controls-pics">
        <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handleSearch} />
        <div className="header-controls-pic header-controls-cart">
          <div className="header-controls-cart-full">4</div>
          <div className="header-controls-cart-menu" />
        </div>
      </div>
      {showForm
        && (
        <form data-id="search-form" className="header-controls-search-form form-inline">
          <input className="form-control" placeholder="Поиск" onChange={handleChange} value={search} />
        </form>
        )}
    </div>
  );
}

Control.propTypes = {
  location: PropTypes.object,
};
