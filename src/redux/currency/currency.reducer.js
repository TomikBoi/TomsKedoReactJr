import CurrencyActionType from "./currency.types";

const INITIAL_STATE = {
  hiddenCur: true,
  currency: "USD",
};

const currencyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CurrencyActionType.CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      };
    case CurrencyActionType.TOGGLE_CURRENCY:
        return {
          ...state,
          hiddenCur: !state.hiddenCur
        }
      case CurrencyActionType.CLOSE_CURRENCY:
        return {
          ...state,
          hiddenCur: true
        }

    default:
      return state;
  }
};

export default currencyReducer;
