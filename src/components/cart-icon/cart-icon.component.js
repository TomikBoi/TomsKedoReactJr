import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg'
import './cart-icon.styles.scss'

class CartIcon extends React.Component {

  render() {
    const {itemCount} = this.props 

    return (
      <div className='cart'>
        <ShoppingIcon className='cart-icon'/>
        <span className='cart-icon-count'>{itemCount}</span> 
      </div>
    )
  }
}

const mapStateToProps = ({cart: {cartItems}}) => ({
  itemCount: cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0)
})

export default connect(mapStateToProps)(CartIcon);