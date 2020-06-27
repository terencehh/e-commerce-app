import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.scss';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import LoginAndRegisterPage from './pages/login-and-register/login-and-register.component';
import CheckoutPage from './pages/checkout/checkout.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

class App extends Component {

  // function reference which allows us to store a function to unsubscribe to a listener
  unsubscribeFromAuth = null;

  // subscribe to a authStateChanged listener that fires whenever authentication status has changed in the app e.g. user signs in, registers, signs out. We can handle state changes when this happens
  componentDidMount() {

    const { setCurrentUser } = this.props


    console.log("Mounting")
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      console.log("userAuth is: ", userAuth)

      // if null means signing out or not authenticated
      if (userAuth) {
        // check if our user has updated
        const userRef = await createUserProfileDocument(userAuth)
        // send us a snapshot representing the data to allow us to check if a document exists, and also retrieve the data in JSON form
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      }
      else {
        // set currentUser to null
        setCurrentUser(null)
      }
    })
  }

  // unsubscribe from the listener by calling the function returned from the listener upon component unmount.
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* Ensure header is always present & rendered */}
        <Header />
        {/* Switch ensures that if multiple path matches, only renders first path */}
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/signin'
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<LoginAndRegisterPage />)}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
