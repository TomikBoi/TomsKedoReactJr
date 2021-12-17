import React from "react";
import { connect } from "react-redux";
import "./categorypage.styles.scss";
import CategoryItem from "../../components/category-item/category-item.component";
import capitalizeFirstLetter from "../../helper/capitalizeFirstLetter";

class CategoryPage extends React.Component {
  render() {
    const { categoryItems, hiddenCart } = this.props;
    return (
      <div className={`cart-overlay ${!hiddenCart ? 'overlay' : '' }`}>
        <div className="container">
          <div className="category">
            <div className="category-container">
              <h2 className="category-text">
                {capitalizeFirstLetter(categoryItems.name)}
              </h2>
              <div className="category-items">
                {categoryItems.products.map((item) => (
                  <CategoryItem key={item.id} item={item} />
                ))}
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

export default connect(mapStateToProps)(CategoryPage);
