import React from "react";

import './currency-icon.styles.scss'

class CurrencyIcon extends React.Component {
  render() {
    return (
      <div className="currency">
        <span>
          $ <i className="currency-icon-dropdown"></i>
        </span>
      </div>
    );
  }
}

export default CurrencyIcon;
