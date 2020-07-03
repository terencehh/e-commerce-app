import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItemToCart = item => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: item
})

export const decreaseItemFromCart = item => ({
  type: CartActionTypes.DECREASE_CART_ITEM,
  payload: item
})

export const clearItemFromCart = item => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: item
})

