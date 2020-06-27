import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as CartSVG } from '../../assets/cart.svg';

// cart Icon has a number icon indicating how many items are currently in cart
const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-component' onClick={toggleCartHidden}>
    <CartSVG className='cart-icon' />
    <span className='item-count'>0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);