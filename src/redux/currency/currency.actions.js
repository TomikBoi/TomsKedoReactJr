import CurrencyActionType from './currency.types'

export const changeCurrency = currency => ({
  type: CurrencyActionType.CHANGE_CURRENCY,
  payload: currency
})

export const toggleCurrency = () => ({
  type: CurrencyActionType.TOGGLE_CURRENCY
})

export const closeCurrency = () => ({
  type: CurrencyActionType.CLOSE_CURRENCY
})