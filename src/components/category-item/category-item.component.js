import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as BuyIcon} from "../../assets/buy-icon.svg"
import {connect} from 'react-redux'
import { addItem } from "../../redux/cart/cart.actions";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import getPrice from "../../helper/getPrice";
import "./category-item.styles.scss";

class CategoryItem extends React.Component {
  render() {
    const {item, addItem, currency } = this.props;
    return (
      <div className="card">
      <Link to={`/product/${item.id}`}>
          <img src={item.gallery[0]} className="card-image" alt={item.name}/>
      </Link>
        <div className="card-text">
          <p className="card-text-name">{item.brand} {item.name}</p>
          <span className="card-text-price">{`${getCurrencySymbol(currency)} ${getPrice(item, currency)}`}</span>
          {item.inStock ? 
          <BuyIcon className='card-buy-icon' onClick={() => addItem(item)}/>
          :
          null}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

const mapStateToProps = ({currency: {currency}}) => ({
  currency
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
