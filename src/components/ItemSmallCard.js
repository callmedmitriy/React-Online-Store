import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ItemSmallCard(props) {
  const {
    id, images, title, price,
  } = props;
  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img
          src={images[0]}
          className="card-img-top img-fluid"
          alt={title}
        />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">
            {price}
            {' '}
руб.
          </p>
          <NavLink to={`products/${id}`} className="btn btn-outline-primary">Заказать</NavLink>
        </div>
      </div>
    </div>
  );
}

ItemSmallCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
