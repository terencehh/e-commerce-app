import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-botton.component'
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss'
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ? (
          cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
        ) :
          (<span className='empty-message'>Your cart is empty</span>)
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }
    }>GO TO CHECKOUT</CustomButton>
  </div>
)

// we need cartItems state from the redux store
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

// react connect automatically gives us dispatch prop if we do not supply mapDispatchToProps
// requires access to browser history/match API via prop
export default withRouter(connect(mapStateToProps)(CartDropdown));