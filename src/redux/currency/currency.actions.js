import CurrencyActionType from './currency.types'


export const toggleCurrencyHidden = () => ({
  type: CurrencyActionType.TOGGLE_CURRENCY_HIDDEN
})

export const changeCurrency = currency => ({
  type: CurrencyActionType.CHANGE_CURRENCY,
  payload: currency
})
