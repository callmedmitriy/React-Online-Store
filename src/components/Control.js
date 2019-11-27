import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';
import { changeSearchField } from '../actions/actionCreators';

export default function Control() {
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
  const { search } = useSelector((state) => state.catalog);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (showForm) {
      history.push('/catalog');
    }
    setShowForm(!showForm);
  };

  const handleChange = ({ target }) => {
    dispatch(changeSearchField(target.value));
  };

  return (
    <div>
      <div className="header-controls-pics">
        <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handleSearch} />
        <NavLink className="header-controls-pic header-controls-cart" to="/cart">
          {cart.length > 0
            && <div className="header-controls-cart-full">{cart.length}</div>}
          <div className="header-controls-cart-menu" />
        </NavLink>
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
