import React, { useState } from 'react';

export default function Control() {
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState('');

  const handleShow = () => {
    setShowForm(!showForm);
  };

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  /*
    TODO:
    handler for search
    handler for cart
    data for cart
  */

  return (
    <div>
      <div className="header-controls-pics">
        <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={handleShow} />
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
