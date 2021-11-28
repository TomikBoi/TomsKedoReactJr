import React from 'react'

import './custom-button.styles.scss'

const STYLES = [
  'btn-cart-bag',
  'btn-cart-checkout',
  'btn-item-action',
  'btn-add-to-cart'
]

const SIZES = [
  'btn-small', 'btn-medium', 'btn-large', 'btn-huge'
]

class CustomButton extends React.Component {

  render() {
    const {children, type, onClick, buttonStyle, buttonSize} = this.props

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : null

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : null

    return(
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
        {children}
      </button>
    )
  }

}

export default CustomButton;