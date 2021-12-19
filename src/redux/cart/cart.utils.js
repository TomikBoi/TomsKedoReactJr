export const addItemQuantity = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.uniqueID === cartItemToAdd.uniqueID
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.uniqueID === cartItemToAdd.uniqueID
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
};

export const selectAttributes = (cartItems, cartItemAddAttribute) => {
  const [newItem, attribute] = cartItemAddAttribute;

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.uniqueID === newItem.uniqueID
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.uniqueID === newItem.uniqueID
        ? {
            ...cartItem,
            selectedAttribute: { ...cartItem.selectedAttribute, ...attribute },
          }
        : cartItem
    );
  }
};

export const addItemToCart = (cartItems, cartItemAddAttribute) => {
  const [newItem, attribute] = cartItemAddAttribute;

  const existingCartItem = cartItems.find(
    (cartItem) =>
      cartItem.id === newItem.id &&
      JSON.stringify(cartItem.selectedAttribute) === JSON.stringify(attribute)
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => (
      cartItem.id === newItem.id &&
      JSON.stringify(cartItem.selectedAttribute) === JSON.stringify(attribute)
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem 
    )
    );
  }

  return [
    ...cartItems,
    {
      ...newItem,
      quantity: 1,
      selectedAttribute: { ...attribute },
      uniqueID: createId(),
    },
  ];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.uniqueID === cartItemToRemove.uniqueID
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.uniqueID !== cartItemToRemove.uniqueID
    );
  }

  return cartItems.map((cartItem) =>
    cartItem.uniqueID === cartItemToRemove.uniqueID
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

function createId() {
  return Math.floor(Date.now() * Math.random());
}
