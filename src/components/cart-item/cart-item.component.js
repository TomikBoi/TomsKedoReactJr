import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { addAttribute } from "../../redux/cart/cart.actions";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import "./cart-item.styles.scss";

class CartItem extends React.Component {
  render() {
    const { cartItem, currency, addAttribute } = this.props;
    const price = cartItem.prices
      .filter((item) => item.currency === currency)
      .map((filteredItem) => filteredItem.amount);

    const handleChange = (event) => {
      const eventObj = document.getElementById(event.target.id);
      console.log(eventObj)
      const formId = eventObj.form.name;
      return { [formId]: event.target.value };
    };

    return (
      <div className="cart-wrapper">
        <div className="nameprice">
          <p>{cartItem.name}</p>
          <p>
            {getCurrencySymbol(currency)} {price}
          </p>

          {cartItem.attributes.map((item) => (
            
            <form id={cartItem.id} name={item.id} key={cartItem.name + item.id} className="form">
              <div className="nameprice-btn">
                {item.items.map((item) => (
                  <div key={item.id}>
                    <input
                      type="radio"
                      id={`${item.id}-${cartItem.id}`}
                      value={item.value}
                      checked={Object.values(cartItem.selectedAttribute).includes(item.value)}
                      onChange={(e) =>
                        addAttribute([cartItem, handleChange(e)])
                      }
                    />
                    <label className="radio-label" htmlFor={`${item.id}-${cartItem.id}`}>
                      {item.value}
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
          <img src={cartItem.gallery[0]} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAttribute: (item) => dispatch(addAttribute(item)),
});

const mapStateToProps = ({ currency: { currency } }) => ({
  currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
