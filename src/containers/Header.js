import React from 'react';

import { withRouter } from 'react-router-dom';

import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Control from '../components/Control';

const ControlWithPath = withRouter((props) => <Control {...props} />);

export default function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-sm navbar-light bg-light">
            <Logo />
            <div className="collapase navbar-collapse" id="navbarMain">
              <Menu />
              <ControlWithPath />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
