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
        hiddenCur: true
      };

    default:
      return state;
  }
};

export default currencyReducer;
