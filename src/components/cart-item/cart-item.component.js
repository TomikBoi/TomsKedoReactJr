import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import "./cart-item.styles.scss";

class CartItem extends React.Component {
  render() {
    const { item, currency } = this.props;
    const price = item.prices
      .filter((item) => item.currency === currency)
      .map((filteredItem) => filteredItem.amount);
    return (
      <div className="cart-wrapper">
        <div className="nameprice">
          <p>{item.name}</p>
          <p>
            {getCurrencySymbol(currency)} {price}
          </p>
          <div className="nameprice-btn">
            {item.attributes.map((item) =>
              item.items.map((item) => (
                <CustomButton
                  buttonStyle={"btn-item-action"}
                  buttonSize={"btn-small"}
                  key={item.id}
                >
                  <span className="nameprice-attr">{item.value}</span>
                </CustomButton>
              ))
            )}
          </div>
        </div>
        <div className="quantity">
          <CustomButton
            buttonStyle={"btn-item-action"}
            buttonSize={"btn-small"}
          >
            <span className="quantity-btn">+</span>
          </CustomButton>
          <p>{item.quantity}</p>
          <CustomButton
            buttonStyle={"btn-item-action"}
            buttonSize={"btn-small"}
          >
            <span className="quantity-btn">-</span>
          </CustomButton>
        </div>
        <div className="img">
          <img src={item.gallery[0]} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currency: { currency } }) => ({
  currency,
});
export default connect(mapStateToProps)(CartItem);
