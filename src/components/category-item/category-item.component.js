import React from "react";
import { Link } from "react-router-dom";
import {ReactComponent as BuyIcon} from "../../assets/buy-icon.svg"
import {connect} from 'react-redux'
import { addItem } from "../../redux/cart/cart.actions";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import "./category-item.styles.scss";

class CategoryItem extends React.Component {
  render() {
    const {item, addItem, currency } = this.props;
    const {name, gallery, prices, brand} = item;
    const price = prices
      .filter((item) => item.currency === currency)
      .map((filteredItem) => filteredItem.amount);
    return (
      <div className="card">
      <Link to={`/product/${item.id}`}>
          <img src={gallery[0]} className="card-image" alt={name}/>
      </Link>
        <div className="card-text">
          <p className="card-text-name">{brand} {name}</p>
          <span className="card-text-price">{`${getCurrencySymbol(currency)} ${price}`}</span>
          <BuyIcon className='card-buy-icon' onClick={() => addItem(item)}/>
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
