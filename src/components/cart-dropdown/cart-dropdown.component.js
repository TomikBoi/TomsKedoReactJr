import React from 'react'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'

class CartDropdown extends React.Component {

  render() {
    return (
      <div className='cart-dropdown'>
        <p className='cart-dropdown-text'><b><span>My Bag,</span></b> 2 items</p>
        <div className='cart-dropdown-items'>
        <p>ITEMS YO</p>
        </div>
          <div className='cart-dropdown-buttons'>
            <CustomButton buttonStyle={'btn-cart-bag'} buttonSize={'btn-large'}>View bag</CustomButton>
            <CustomButton buttonStyle={'btn-cart-checkout'} buttonSize={'btn-large'}>Check out</CustomButton>
          </div>
        </div>
    )
  }
}

export default CartDropdown;