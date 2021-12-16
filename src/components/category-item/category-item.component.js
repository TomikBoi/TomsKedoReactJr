import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BuyIcon } from "../../assets/buy-icon.svg";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import getPrice from "../../helper/getPrice";
import "./category-item.styles.scss";

class CategoryItem extends React.Component {
  render() {
    const { item, currency, history } = this.props;
    return (
      <div className={`card ${!item.inStock ? "card--OutOfStock" : ''}`}>
        <div className="card-presentation">
          <div className="card-image-wrapper">
            <Link to={`/product/${item.id}`}>
              <img
                src={item.gallery[0]}
                className="card-image"
                alt={item.name}
              />
            </Link>
          </div>
          {item.inStock ? (
            <BuyIcon
              className="card-buy-icon"
              onClick={() => history.push(`/product/${item.id}`)}
            />
          ) : null}
        </div>
        <div className="card-text">
          <p className="card-text-name">
            {item.brand} {item.name}
          </p>
          <span className="card-text-price">{`${getCurrencySymbol(
            currency
          )} ${getPrice(item, currency)}`}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ currency: { currency } }) => ({
  currency,
});

export default withRouter(connect(mapStateToProps)(CategoryItem));
