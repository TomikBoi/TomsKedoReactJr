import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/cart.svg";
import { closeCart, toggleCart } from "../../redux/cart/cart.actions";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "./cart-icon.styles.scss";

class CartIcon extends React.Component {
  render() {
    const { itemCount, dispatch, hiddenCart } = this.props;

    const handleBlur = (e) => {
      if (
        !e.target.contains(e.relatedTarget)
      ) {
        dispatch(closeCart());
      }
    };

    return (
      <div className="cart" onBlur={(e) => handleBlur(e)} tabIndex={0}>
        <ShoppingIcon
          className="cart-icon"
          onClick={() => dispatch(toggleCart())}
        />
        <span className="cart-icon-count">{itemCount}</span>
        <div className="cart-icon-dropdown">
          {!hiddenCart ? <CartDropdown /> : ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: { cartItems, hiddenCart } }) => ({
  itemCount: cartItems.reduce(
    (accQuantity, cartItem) => accQuantity + cartItem.quantity,
    0
  ),
  hiddenCart,
});

export default connect(mapStateToProps)(CartIcon);
