import React from "react";
import { connect } from "react-redux";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";

import CartPageItem from "./cartpage-item.component";
import "./cartpage.styles.scss";

class CartPage extends React.Component {
  render() {
    const { cartItems, currency, totalPrice } = this.props;

    return (
      <div className="homepage-overlay">
        <div className="cartpage-wrapper">
          <h2 className="cartpage-headline">Cart</h2>
          {cartItems.length === 0 ? (
            <p>Please add a product</p>
          ) : (
            cartItems.map((cartItem) => (
              <CartPageItem key={cartItem.id} cartItem={cartItem} />
            ))
          )}
          <div className="cartpage-total-wrapper">
            <p className="cartpage-total-text">Total:</p>
            <p className="cartpage-total-amount">
              {getCurrencySymbol(currency)}{" "}
              {totalPrice.length > 0
                ? totalPrice
                    .reduce(
                      (accumulator, currentValue) => accumulator + currentValue
                    )
                    .toFixed(2)
                : "0"}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: { cartItems }, currency: { currency } }) => ({
  cartItems,
  currency,
  totalPrice: cartItems
    .map(
      (item) =>
        item.quantity *
        item.prices
          .filter((item) => item.currency === currency)
          .map((filteredItem) => filteredItem.amount)
    )
    .flat(),
});

export default connect(mapStateToProps)(CartPage);
