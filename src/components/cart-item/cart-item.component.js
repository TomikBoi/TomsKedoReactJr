import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import "./cart-item.styles.scss";

class CartItem extends React.Component {
  render() {
    const { item } = this.props;
    const price = item.prices
      .filter((item) => item.currency === "USD")
      .map((filteredItem) => filteredItem.amount);
    return (
      <div className="cart-wrapper">
        <div className="nameprice">
          <p>{item.name}</p>
          <p>$ {price}</p>
          <div className="nameprice-btn">
          <CustomButton buttonStyle={'btn-item-action'} buttonSize={'btn-small'}><span className='nameprice-attr'>S</span></CustomButton>
          <CustomButton buttonStyle={'btn-item-action'} buttonSize={'btn-small'}><span className='nameprice-attr'>M</span></CustomButton>
          </div>
        </div>
        <div className="quantity">
        <CustomButton buttonStyle={'btn-item-action'} buttonSize={'btn-small'}><span className='quantity-btn'>+</span></CustomButton>
          <p>{item.quantity}</p>
          <CustomButton buttonStyle={'btn-item-action'} buttonSize={'btn-small'}><span className='quantity-btn'>-</span></CustomButton>
        </div>
        <div className="img">
          <img src={item.gallery[0]} />
        </div>
      </div>
    );
  }
}

export default CartItem;
