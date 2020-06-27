import React from 'react';
import './cart-icon.styles.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as CartSVG } from '../../assets/cart.svg';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
// cart Icon has a number icon indicating how many items are currently in cart
const CartIcon = ({ toggleCartHidden, itemCount }) => (

  <div className='cart-component' onClick={toggleCartHidden}>
    <CartSVG className='cart-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);