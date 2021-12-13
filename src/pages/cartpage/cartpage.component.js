import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import { connect } from "react-redux";
import { addAttribute } from "../../redux/cart/cart.actions";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import getPrice from "../../helper/getPrice";
import "./cartpage.styles.scss";

class CartPage extends React.Component {
  render() {
    const { cartItems, currency, addAttribute, totalPrice } = this.props;

    return (
      <div className="cartpage-wrapper">
        <h2 className="cartpage-headline">Cart</h2>
        {cartItems.length === 0 ? (
          <p>Please add a product</p>
        ) : (
          cartItems.map((cartItem) => (
            <div key={cartItem.id}>
              <div className="cartpage-cart-wrapper">
                <div className="cartpage-cart-wrapper-left">
                  <div>
                    <p className="cartpage-cart-wrapper-left-brand">
                      {cartItem.brand}
                    </p>
                    <span className="cartpage-cart-wrapper-left-name">
                      {cartItem.name}
                    </span>
                  </div>
                  <p className="cartpage-cart-wrapper-left-price">
                    {getCurrencySymbol(currency)} {getPrice(cartItem, currency)}
                  </p>
                  {cartItem.attributes.map((product) => (
                    <form
                      name={product.id}
                      key={product.id}
                      className="cart-form"
                    >
                      <div className="cart-form-btn">
                        {product.items.map((item) => (
                          <div key={item.id}>
                            <input
                              type="radio"
                              id={`${item.id}-${product.id}-${cartItem.id}`}
                              value={item.value}
                              checked={
                                cartItem.selectedAttribute[`${product.id}`] ===
                                item.value
                              }
                              onChange={(e) =>
                                addAttribute([
                                  cartItem,
                                  { [product.id]: item.value },
                                ])
                              }
                            />

                            <label
                              className={`cartpage-radio-label cartpage-radio-label-${product.type} `}
                              style={
                                product.type === "swatch"
                                  ? { backgroundColor: `${item.value}` }
                                  : null
                              }
                              htmlFor={`${item.id}-${product.id}-${cartItem.id}`}
                            >
                              {product.type === "swatch" ? null : item.value}
                            </label>
                          </div>
                        ))}
                      </div>
                    </form>
                  ))}
                </div>
                <div className="cartpage-quantity">
                  <CustomButton
                    buttonStyle={"btn-item-action"}
                    buttonSize={"btn-medium"}
                  >
                    <span className="cartpage-quantity-btn">+</span>
                  </CustomButton>
                  <p>{cartItem.quantity}</p>
                  <CustomButton
                    buttonStyle={"btn-item-action"}
                    buttonSize={"btn-medium"}
                  >
                    <span className="cartpage-quantity-btn">-</span>
                  </CustomButton>
                </div>
                <div className="cartpage-img">
                  <img src={cartItem.gallery[0]} alt={cartItem.name} />
                </div>
              </div>
            </div>
          ))
        )}
        <div className="cartpage-total-wrapper">
          <p className="cartpage-total-text">Total:</p>
          <p className="cartpage-total-amount">{getCurrencySymbol(currency)} {
            totalPrice.length > 0 ? 
            totalPrice.reduce((accumulator,currentValue)=>accumulator+currentValue).toFixed(2)
            : '0'}</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAttribute: (item) => dispatch(addAttribute(item)),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
