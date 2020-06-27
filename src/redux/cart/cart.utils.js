export const addItemToCart = (cartItems, itemToAdd) => {
  // check if the item to add already exists
  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      (cartItem.id === itemToAdd.id) ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }
  else {
    // give all items a base quantity of 1
    return [...cartItems, { ...itemToAdd, quantity: 1 }]
  }
}

// if decrease to 0, then remove item from Cart
export const decreaseItemFromCart = (cartItems, itemToRemove) => {

  console.log(cartItems, itemToRemove)

  const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToRemove.id)

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id)
  }
  else {
    return cartItems.map(cartItem => cartItem.id === itemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
  }
}