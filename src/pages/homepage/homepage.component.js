import React from "react";
import CategoryItem from "../../components/category-item/category-item.component";
import { connect } from "react-redux";
import "./homepage.styles.scss";

class HomePage extends React.Component {
  render() {
    const { categoryItems, hiddenCart } = this.props;

    return (
      <div className={`cart-overlay ${!hiddenCart ? 'overlay' : '' }`}>
        <div className="container">
          <div className="homepage">
            <div className="homepage-container">
              <h2 className="homepage-category-text">All</h2>
              <div className="homepage-items">
                {categoryItems
                  .map((item) => item.products)
                  .map((item) =>
                    item.map((item) => (
                      <CategoryItem key={item.id} item={item} />
                    ))
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: { hiddenCart } }) => ({
  hiddenCart,
});

export default connect(mapStateToProps)(HomePage);
