function getPrice(obj, currency) {
  return obj.prices
    .filter((item) => item.currency === currency)
    .map((filteredItem) => filteredItem.amount);
}
export default getPrice;
