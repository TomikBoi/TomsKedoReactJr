import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import { connect } from "react-redux";
import { selectAttribute } from "../../redux/cart/cart.actions";
import { addItemQuantity } from "../../redux/cart/cart.actions";
import { removeItem } from "../../redux/cart/cart.actions";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import getPrice from "../../helper/getPrice";
import "./cartpage.styles.scss";

class CartPageItem extends React.Component {
  render() {
    const { cartItem, currency, addItemQuantity, removeItem, selectAttribute } =
      this.props;
    return (
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
              <form name={product.id} key={product.id} className="cart-form">
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
                          selectAttribute([
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
              onClick={() => addItemQuantity(cartItem)}
            >
              <span className="cartpage-quantity-btn">+</span>
            </CustomButton>
            <p>{cartItem.quantity}</p>
            <CustomButton
              buttonStyle={"btn-item-action"}
              buttonSize={"btn-medium"}
              onClick={() => removeItem(cartItem)}
            >
              <span className="cartpage-quantity-btn">-</span>
            </CustomButton>
          </div>
          <div className="cartpage-img">
            <img src={cartItem.gallery[0]} alt={cartItem.name} />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectAttribute: (item) => dispatch(selectAttribute(item)),
  addItemQuantity: (item) => dispatch(addItemQuantity(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

const mapStateToProps = ({ currency: { currency } }) => ({
  currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPageItem);
