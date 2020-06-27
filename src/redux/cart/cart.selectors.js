// create a memoized selector for our card component
// this ensures that components which depend on our cart state do not rerender whenever state changes that is unrelated to the cart item.

import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems);

export const selectCartHidden = createSelector([selectCart], cart => cart.hidden)

export const selectCartItemsCount = createSelector([selectCartItems],
  cartItems => cartItems.reduce((acc, curCartItem) =>
    acc + curCartItem.quantity, 0))


export const selectCartTotal = createSelector([selectCartItems], cartItems => cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.price), 0))