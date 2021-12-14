const currencySymbol = {
  USD: '$',
  GBP: '£',
  AUD: '$',
  JPY: '¥',
  RUB: '₽'
}

export const getCurrencySymbol = currency => {
  if (currencySymbol[currency]) {
    return currencySymbol[currency]
  } else {
    return currencySymbol["USD"]
  }
}