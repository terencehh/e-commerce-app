import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'

function App() {

  //
  return (
    <div>
      {/* Ensure header is always present & rendered */}
      <Header />
      {/* Switch ensures that if multiple path matches, only renders first path */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;
