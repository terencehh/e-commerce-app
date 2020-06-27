import React from 'react';
import { Link } from 'react-router-dom'
// importing an SVG in React
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => (
  <div className="header" >
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to='/shop'>SHOP</Link>
      <Link className="option" to='/contact'>CONTACT</Link>
      {
        currentUser ?
          (<div className='option' onClick={() => auth.signOut()}>
            SIGN OUT
          </div>)
          :
          (<Link className="option" to='/signin'>SIGN IN</Link>)
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

// destructure our state: used to be state.user.currentUser and state.cart.hidden
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);