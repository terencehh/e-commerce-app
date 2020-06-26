import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import LoginAndRegisterPage from './pages/login-and-register/login-and-register.component'
import { auth } from './firebase/firebase.utils';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  // whenever any change occurs in firebase, send a message on auth
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  // close the subscription on auth changes
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* Ensure header is always present & rendered */}
        <Header currentUser={this.state.currentUser} />
        {/* Switch ensures that if multiple path matches, only renders first path */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={LoginAndRegisterPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
