import React from "react";
import {connect} from 'react-redux'
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import { toggleCurrencyHidden } from "../../redux/currency/currency.actions";

import './currency-icon.styles.scss'

class CurrencyIcon extends React.Component {
  render() {
    const {toggleCurrencyHidden, currency} = this.props 
    return (
      <div className="currency" onClick={toggleCurrencyHidden}>
        <span className="currency-icon">{getCurrencySymbol(currency)}</span> <span><i className="currency-icon-dropdown"></i>
        </span>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  toggleCurrencyHidden: () => dispatch(toggleCurrencyHidden())
})

const mapStateToProps = ({currency: {currency}}) => ({
  currency
})

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyIcon);
