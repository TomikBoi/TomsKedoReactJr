import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'

class CartDropdown extends React.Component {

  render() {
    const {cartItems} = this.props
    const totalPrice =  cartItems.map(item => item.quantity * item.prices.filter((item) => item.currency === "USD")
    .map((filteredItem) => filteredItem.amount))

    return (
      <div className='cart-dropdown'>
        <p className='cart-dropdown-text'><span>My Bag,</span>{cartItems.length} items</p>
        <div className='cart-dropdown-items'>
        {
          cartItems.length === 0 ? <p>Please add a product</p> : 
          cartItems.map(cartItem => 
            <CartItem key={cartItem.id} item={cartItem} />)
        }
        </div>
        <div className='cart-dropdown-total'>
        <span className='cart-dropdown-total-left'>Total: </span><span className='cart-dropdown-total-right'>$ {
          totalPrice.length > 0 ? 
          totalPrice.flat().reduce((accumulator,currentValue)=>accumulator+currentValue).toFixed(2)
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

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown);