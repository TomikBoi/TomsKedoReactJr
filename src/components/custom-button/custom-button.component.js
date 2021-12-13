import React from 'react'


import './custom-button.styles.scss'

const STYLES = [
  'btn-cart-bag',
  'btn-cart-checkout',
  'btn-item-action',
  'btn-add-to-cart',
  'btn-add-to-cart-disabled'
]

const SIZES = [
  'btn-small', 'btn-medium', 'btn-large', 'btn-huge'
]

class CustomButton extends React.Component {

  render() {
    const {children, type, onClick, buttonStyle, buttonSize, disabled = false} = this.props

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : ''

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : ''

    return(
      <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type} disabled={disabled}>
        {children}
      </button>
    )
  }

}

export default CustomButton;