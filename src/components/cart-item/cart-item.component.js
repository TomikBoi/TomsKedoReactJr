import React from "react";
import { connect } from "react-redux";
import { selectAttribute } from "../../redux/cart/cart.actions";
import { addItemQuantity } from "../../redux/cart/cart.actions";
import { removeItem } from "../../redux/cart/cart.actions";
import { clearItemFromCart } from "../../redux/cart/cart.actions";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import GallerySlider from "../../components/gallery-slider/gallery-slider.component";
import getPrice from "../../helper/getPrice";
import "./cart-item.styles.scss";

class CartItem extends React.Component {
  render() {
    const {
      cartItem,
      currency,
      selectAttribute,
      removeItem,
      addItemQuantity,
      clearItemFromCart,
    } = this.props;

    return (
      <div className="cart-wrapper">
        <div className="nameprice">
          <span className="nameprice-name">{cartItem.name}</span>
          <span className="nameprice-item-price">
            {getCurrencySymbol(currency)} {getPrice(cartItem, currency)}
          </span>
          <form className="form">
            {cartItem.attributes.map((product) => (
              <div key={product.id} className="form-wrapper">
                <p className="form-attribute-name">{product.id}:</p>
                <div className="nameprice-btn">
                  {product.items.map((item) => (
                    <div key={item.id}>
                      <input
                        type="radio"
                        id={`${item.id}-${product.id}-${cartItem.uniqueID}`}
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
                        className={`radio-label radio-label-${product.type} `}
                        style={
                          product.type === "swatch"
                            ? { backgroundColor: `${item.value}` }
                            : null
                        }
                        htmlFor={`${item.id}-${product.id}-${cartItem.uniqueID}`}
                      >
                        {product.type === "swatch" ? null : item.value}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </form>
        </div>
        <div className="quantity">
          <span
          className="btn btn-item-action btn-small"
            onClick={() => addItemQuantity(cartItem)}
          >
            <span className="quantity-btn">+</span>
          </span>
          <p>{cartItem.quantity}</p>
          <span
            className="btn btn-item-action btn-small" 
            onClick={() => removeItem(cartItem)}
          >
            <span className="quantity-btn" >-</span>
          </span>
        </div>
        <div className="img-container">
          <GallerySlider images={cartItem.gallery} classes={"img"} />
          <span
            className="img-remove-item"
            onClick={() => clearItemFromCart(cartItem)}
          >
            X
          </span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectAttribute: (item) => dispatch(selectAttribute(item)),
  addItemQuantity: (item) => dispatch(addItemQuantity(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});

const mapStateToProps = ({ currency: { currency } }) => ({
  currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
