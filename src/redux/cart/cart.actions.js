import CartActionType from "./cart.types";

export const addItem = item => ({
  type: CartActionType.ADD_ITEM,
  payload: item
})

export const selectAttribute = item => ({
  type: CartActionType.SELECT_ATTRIBUTE,
  payload: item
})

export const addItemQuantity = item => ({
  type: CartActionType.ADD_ITEM_QUANTITY,
  payload: item
})

export const clearItemFromCart = item => ({
  type: CartActionType.CLEAR_ITEM_FROM_CART,
  payload: item
})

export const removeItem = item => ({
  type: CartActionType.REMOVE_ITEM,
  payload: item
})

export const toggleCart = () => ({
  type: CartActionType.TOGGLE_CART,
})

export const closeCart = () => ({
  type: CartActionType.CLOSE_CART
})
export const addItemWithoutAttribute = (item) => ({
  type: CartActionType.ADD_ITEM_WITHOUT_ATTRIBUTES,
  payload: item
}) 