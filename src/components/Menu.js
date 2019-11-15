import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Menu(props) {
  const { footer } = props;

  /*
    it must be in global store
  */
  const links = [{
    name: 'Каталог',
    to: '/catalog',
  }, {
    name: 'О магазине',
    to: '/about',
  }, {
    name: 'Контакты',
    to: '/contacts',
  }];

  const linksList = links.map((link) => (
    <NavLink className="nav-item" activeClassName="active" to={link.to} key={link.name}>
      <span className="nav-link" href="#">{link.name}</span>
    </NavLink>
  ));

  if (footer) {
    return (
      <ul className="nav flex-column">
        {linksList}
      </ul>
    );
  }

  return (
    <ul className="navbar-nav mr-auto">
      <NavLink className="nav-item" activeClassName="active" to="/" exact>
        <span className="nav-link" href="#">Главная</span>
      </NavLink>
      {linksList}
    </ul>
  );
}

Menu.propTypes = {
  footer: PropTypes.bool,
};
