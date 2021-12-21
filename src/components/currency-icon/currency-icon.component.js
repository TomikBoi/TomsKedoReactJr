import React from "react";
import { connect } from "react-redux";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import { toggleCurrency, closeCurrency } from "../../redux/currency/currency.actions";
import CurrencyDropdownContainer from "../currency-dropdown/currency-dropdown.container";

import "./currency-icon.styles.scss";

class CurrencyIcon extends React.Component {
  render() {
    const { currency, hiddenCur, dispatch } = this.props;

    const handleBlur = e => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        dispatch(closeCurrency())
      }
    }
    return (
      <div className="currency" onBlur={(e) => handleBlur(e)}  onClick={() => dispatch(toggleCurrency())}
      tabIndex={0}>
        <span className="currency-icon">{getCurrencySymbol(currency)}</span>{" "}
        <span>
          <i
            className={`currency-icon-dropdown currency-icon-dropdown-arrow-${hiddenCur}`}
          ></i>
        </span>
        <div className="currency-dropdown">
        {!hiddenCur ? <CurrencyDropdownContainer /> : ''}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currency: { currency, hiddenCur } }) => ({
  currency,
  hiddenCur
});

export default connect(mapStateToProps)(CurrencyIcon);
