import React from 'react'

import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg'

import './cart-icon.styles.scss'

class CartIcon extends React.Component {

  render() {
    return (
      <div className='cart'>
        <ShoppingIcon className='cart-icon'/>
        <span className='cart-icon-count'>2</span> 
      </div>
    )
  }
}

export default CartIcon;