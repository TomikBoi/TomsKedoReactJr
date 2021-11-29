import React from "react";
import {ReactComponent as BuyIcon} from "../../assets/buy-icon.svg"
import "./category-item.styles.scss";

class CategoryItem extends React.Component {
  render() {
    const { id, name, gallery, prices } = this.props;
    const price = prices
      .filter((item) => item.currency === "USD")
      .map((filteredItem) => filteredItem.amount);
    return (
      <div className="card">
          <img src={gallery[0]} className="card-image" />
        <div className="card-text">
          <p className="card-text-name">{name}</p>
          <span className="card-text-price">{`$${price}`}</span>
          <BuyIcon className='card-buy-icon' />
        </div>
      </div>
    );
  }
}

export default CategoryItem;
