import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-botton.component'
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
      }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

// we need cartItems state from the redux store
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown);