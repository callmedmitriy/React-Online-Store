import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './containers/Header';
import Footer from './containers/Footer';

import MainPage from './containers/MainPage';
import Catalog from './containers/Catalog';
import About from './containers/About';
import Contacts from './containers/Contacts';
import Page404 from './containers/Page404';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/catalog" component={Catalog} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/" exact component={MainPage} />
        <Route component={Page404} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
