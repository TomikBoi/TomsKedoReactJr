import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import { getCurrencySymbol } from '../../helper/getCurrencySymbol'
import './cart-dropdown.styles.scss'

class CartDropdown extends React.Component {

  render() {
    const {cartItems, currency, itemCount, totalPrice} = this.props

    return (
      <div className='cart-dropdown'>
        <p className='cart-dropdown-text'><span>My Bag, </span>{itemCount} items</p>
        <div className='cart-dropdown-items'>
        {
          itemCount === 0 ? <p>Please add a product</p> : 
          cartItems.map(cartItem => 
            <CartItem key={cartItem.id} cartItem={cartItem} />)
        }
        </div>
        <div className='cart-dropdown-total'>
        <span className='cart-dropdown-total-left'>Total: </span><span className='cart-dropdown-total-right'>{getCurrencySymbol(currency)} {
          totalPrice.length > 0 ? 
          totalPrice.reduce((accumulator,currentValue)=>accumulator+currentValue).toFixed(2)
          : '0'
        }</span>
        </div>
          <div className='cart-dropdown-buttons'>
            <CustomButton buttonStyle={'btn-cart-bag'} buttonSize={'btn-large'}>View bag</CustomButton>
            <CustomButton buttonStyle={'btn-cart-checkout'} buttonSize={'btn-large'}>Check out</CustomButton>
          </div>
        </div>
    )
  }
}

const mapStateToProps = ({cart: {cartItems}, currency: {currency}}) => ({
  cartItems,
  currency,
  itemCount: cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0),
  totalPrice: cartItems.map(item => item.quantity * item.prices.filter((item) => item.currency === currency)
  .map((filteredItem) => filteredItem.amount)).flat()
})

export default connect(mapStateToProps)(CartDropdown);