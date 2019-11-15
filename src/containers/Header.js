import React from 'react';

import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Control from '../components/Control';

export default function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo />
            <div className="collapase navbar-collapse" id="navbarMain">
              <Menu />
              <Control />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
