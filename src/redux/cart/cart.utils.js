export const addItemToCart = (cartItems, item) => {
  // check if the item to add already exists
  const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);
  if (existingCartItem) {
    return cartItems.map(cartItem =>
      (cartItem.id === item.id) ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    )
  }
  else {
    // give all items a base quantity of 1
    return [...cartItems, { ...item, quantity: 1 }]
  }
}