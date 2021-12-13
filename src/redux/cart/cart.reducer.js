import CartActionType from "./cart.types";
import {addItemToCart} from './cart.utils'
import {selectAttributes} from './cart.utils'
import { removeItemFromCart } from "./cart.utils";
import { addItemQuantity } from "./cart.utils";
const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      }
      case CartActionType.ADD_ITEM:
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        }
      case CartActionType.ADD_ITEM_QUANTITY:
        return {
          ...state,
          cartItems: addItemQuantity(state.cartItems, action.payload)
        }
    
      case CartActionType.SELECT_ATTRIBUTE:
        return {
          ...state,
          cartItems: selectAttributes(state.cartItems, action.payload)
        }

      case CartActionType.CLEAR_ITEM_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
        }
      case CartActionType.REMOVE_ITEM:
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        }
    default:
     return state
  }
}

export default cartReducer;