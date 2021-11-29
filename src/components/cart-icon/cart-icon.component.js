import React from 'react'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cart-icon.styles.scss'

class CartIcon extends React.Component {

  render() {
    const {toggleCartHidden} = this.props 

    return (
      <div className='cart' onClick={toggleCartHidden}>
        <ShoppingIcon className='cart-icon'/>
        <span className='cart-icon-count'>2</span> 
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);