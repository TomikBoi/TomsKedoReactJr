import React from "react";
import {connect} from 'react-redux'
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import { toggleCurrencyHidden } from "../../redux/currency/currency.actions";

import './currency-icon.styles.scss'

class CurrencyIcon extends React.Component {
  render() {
    const {toggleCurrencyHidden, currency, hiddenCur} = this.props 
    return (
      <div className="currency" onClick={toggleCurrencyHidden}>
        <span className="currency-icon">{getCurrencySymbol(currency)}</span> <span><i className={`currency-icon-dropdown currency-icon-dropdown-${hiddenCur}`}></i>
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleCurrencyHidden: () => dispatch(toggleCurrencyHidden())
})

const mapStateToProps = ({currency: {currency, hiddenCur}}) => ({
  currency,
  hiddenCur
})

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyIcon);
