import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Menu() {
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

  return (
    <ul className="navbar-nav mr-auto">
      <NavLink className="nav-item" activeClassName="active" to="/" exact>
        <span className="nav-link" href="#">Главная</span>
      </NavLink>
      {links.map((link) => (
        <NavLink className="nav-item" activeClassName="active" to={link.to} key={link.name}>
          <span className="nav-link" href="#">{link.name}</span>
        </NavLink>
      ))}
    </ul>
  );
}
