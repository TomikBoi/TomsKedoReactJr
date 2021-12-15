import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CurrencyIcon from "../currency-icon/currency-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CurrencyDropdownContainer from "../currency-dropdown/currency-dropdown.container";
import "./header.styles.scss";

class Header extends React.Component {


  render() {
    return (
      <div className="header">
        <div className="header-categories">
          <NavLink className="header-categories-category" exact to="/">
            All
          </NavLink>
          <NavLink className="header-categories-category" to="/category/tech">
            Tech
          </NavLink>
          <NavLink
            className="header-categories-category"
            to="/category/clothes"
          >
            Clothes
          </NavLink>
        </div>
        <Link to="/" className="header-logo-container">
          <Logo className="logo" />
        </Link>
        <div className="header-currencytcart">
          <CurrencyIcon />
          <CartIcon />
          

        </div>
       
      </div>
    );
  }
}

export default Header;
