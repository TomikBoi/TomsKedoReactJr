export const addItemToCart = (cartItems, cartItemToAdd) => {
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

  return [
    ...cartItems,
    { ...cartItemToAdd, quantity: 1, selectedAttribute: "" },
  ];
};

export const addItemAttribute = (cartItems, cartItemAddAttribute) => {
  const [newItem, attribute] = cartItemAddAttribute

  return cartItems.map((cartItem) =>
    cartItem.id === newItem.id
      ? {
          ...cartItem,
          selectedAttribute: { ...cartItem.selectedAttribute, ...attribute },
        }
      : cartItem
  );
};
