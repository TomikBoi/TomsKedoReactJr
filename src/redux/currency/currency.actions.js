import CurrencyActionType from './currency.types'

export const changeCurrency = currency => ({
  type: CurrencyActionType.CHANGE_CURRENCY,
  payload: currency
})
