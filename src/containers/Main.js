import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainPage from '../components/MainPage';
import Catalog from '../components/Catalog';
import About from '../components/About';
import Contacts from '../components/Contacts';
import ItemCard from '../components/ItemCard';
import Cart from '../components/Cart';
import Page404 from '../components/Page404';

import Banner from '../img/banner.jpg';

export default function Main() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <div className="banner">
            <img src={Banner} className="img-fluid" alt="К весне готовы!" />
            <h2 className="banner-header">К весне готовы!</h2>
          </div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/cart" component={Cart} />
            <Route path="/catalog/:id" component={ItemCard}/>
            <Route path="/catalog" exact component={Catalog} />
            <Route path="/" exact component={MainPage} />
            <Route component={Page404} />
          </Switch>
        </div>
      </div>
    </main>
  );
}
