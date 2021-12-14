import React from "react";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import {connect} from 'react-redux'
import { changeCurrency } from "../../redux/currency/currency.actions";
import './currency-dropdown.styles.scss'

class CurrencyDropdown extends React.Component {
  render() {
    const {currencies, changeCurrency} = this.props
    return(
      <div className='currency-dropown-wrapper'>
        <ul className='currency-dropdown-list'>
          {
            currencies.map(item =>
              <li className='currency-dropdown-list-item' key={item}><button className='currency-dropdown-list-item-button' onClick={() => changeCurrency(item)}>{getCurrencySymbol(item)} {item}</button></li>
            )
          }
         </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  changeCurrency: currency => dispatch(changeCurrency(currency))
})


export default connect(null, mapDispatchToProps)(CurrencyDropdown);