import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import './cart-icon.styles.scss'

class CartIcon extends React.Component {

  render() {
    const {itemCount} = this.props 

    const handleClick = () => {
      document.querySelector(".cart-icon-dropdown").classList.toggle("hidden");
      document.querySelector('.homepage-overlay').classList.toggle('overlay')
    };

    const handleBlur = e => {
      if (!e.currentTarget.contains(e.relatedTarget)) {
        document.querySelector(".cart-icon-dropdown").classList.add("hidden");
        document.querySelector('.homepage-overlay').classList.remove('overlay')
      }
    }

    return (
      <div className='cart' onBlur={(e) => handleBlur(e)} tabIndex={0}>
        <ShoppingIcon className='cart-icon' onClick={() => handleClick()}/>
        <span className='cart-icon-count'>{itemCount}</span> 
        <div className='cart-icon-dropdown hidden'>
        <CartDropdown />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({cart: {cartItems}}) => ({
  itemCount: cartItems.reduce((accQuantity, cartItem) => accQuantity + cartItem.quantity, 0)
})

export default connect(mapStateToProps)(CartIcon);