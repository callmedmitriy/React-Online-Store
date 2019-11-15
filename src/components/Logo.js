import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoImage from '../img/header-logo.png';

export default function Logo() {
  return (
    <NavLink className="navbar-brand" to="/">
      <img src={LogoImage} alt="Bosa Noga" />
    </NavLink>
  );
}
