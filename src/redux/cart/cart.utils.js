export const addItemQuantity = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

};

export const selectAttributes = (cartItems, cartItemAddAttribute) => {
  const [newItem, attribute] = cartItemAddAttribute;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newItem.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? {
            ...cartItem,
            selectedAttribute: { ...cartItem.selectedAttribute, ...attribute },
          }
        : cartItem
    );
  }
}

export const addItemToCart = (cartItems, cartItemAddAttribute) => {
  const [newItem, attribute] = cartItemAddAttribute;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === newItem.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === newItem.id
        ? {
            ...cartItem,
            selectedAttribute: { ...cartItem.selectedAttribute, ...attribute },
            quantity: cartItem.quantity + 1
          }
        : cartItem
    );
  }

  return [
    ...cartItems,
    { ...newItem, quantity: 1, selectedAttribute: { ...attribute } },
  ];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
