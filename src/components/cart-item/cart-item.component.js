import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addAttribute } from "../../redux/cart/cart.actions";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import getPrice from "../../helper/getPrice";
import "./cart-item.styles.scss";

class CartItem extends React.Component {
  render() {
    const { cartItem, currency, addAttribute } = this.props;

    return (
      <div className="cart-wrapper">
        <div className="nameprice">
          <p>{cartItem.name}</p>
          <p>
            {getCurrencySymbol(currency)} {getPrice(cartItem, currency)}
          </p>
          {cartItem.attributes.map((product) => (
            <form name={product.id} key={product.id} className="form">
              <div className="nameprice-btn">
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
                        addAttribute([cartItem, { [product.id]: item.value }])
                      }
                    />

                    <label
                      className={`radio-label radio-label-${product.type} `} 
                      style={ product.type === "swatch" ? { backgroundColor: `${item.value}` } : null}
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
        <div className="quantity">
          <CustomButton
            buttonStyle={"btn-item-action"}
            buttonSize={"btn-small"}
          >
            <span className="quantity-btn">+</span>
          </CustomButton>
          <p>{cartItem.quantity}</p>
          <CustomButton
            buttonStyle={"btn-item-action"}
            buttonSize={"btn-small"}
          >
            <span className="quantity-btn">-</span>
          </CustomButton>
        </div>
        <div className="img">
          <img src={cartItem.gallery[0]} alt={cartItem.name}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAttribute: (item) => dispatch(addAttribute(item))
});

const mapStateToProps = ({ currency: { currency } }) => ({
  currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
