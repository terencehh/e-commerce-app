import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import LoginAndRegisterPage from './pages/login-and-register/login-and-register.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  // whenever any authentication change occurs in firebase, send a message on auth and handle changes to user state
  componentDidMount() {
    console.log("Mounting")
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      // if null means signing out or not authenticated
      if (userAuth) {
        // check if our user has updated
        const userRef = await createUserProfileDocument(userAuth)
        // send us a snapshot representing the data to allow us to check if a document exists, and also retrieve the data in JSON form
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }
      else {
        // set currentUser to null
        this.setState({
          currentUser: userAuth
        })
      }
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
