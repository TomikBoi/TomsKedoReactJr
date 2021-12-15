import React from "react";
import { connect } from "react-redux";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import CurrencyDropdownContainer from "../currency-dropdown/currency-dropdown.container";

import "./currency-icon.styles.scss";

class CurrencyIcon extends React.Component {
  render() {
    const { currency } = this.props;

    const handleClick = (e) => {
      e.target.classList.toggle("currency-icon-dropdown-arrow-down");
      document.querySelector(".currency-dropdown").classList.toggle("hidden");
    };

    const handleBlur = e => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        document.querySelector('.currency-icon-dropdown').classList.add("currency-icon-dropdown-arrow-down");
        document.querySelector(".currency-dropdown").classList.add("hidden");
      }
    }
    return (
      <div className="currency" onBlur={(e) => handleBlur(e)} tabIndex={0}>
        <span className="currency-icon">{getCurrencySymbol(currency)}</span>{" "}
        <span>
          <i
            className={`currency-icon-dropdown currency-icon-dropdown-arrow-down`}
            onClick={(e) => handleClick(e)}
            
          ></i>
        </span>
        <div className="currency-dropdown hidden">
          <CurrencyDropdownContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currency: { currency } }) => ({
  currency,
});

export default connect(mapStateToProps)(CurrencyIcon);
