import React from "react";
import "./categorypage.styles.scss";
import CategoryItem from "../../components/category-item/category-item.component"
import capitalizeFirstLetter from "../../helper/capitalizeFirstLetter";

class CategoryPage extends React.Component {
  render() {
    const { categoryItems } = this.props;
    console.log(categoryItems)
    return (
      <div className="category">
        <div className="category-container">
          <h2 className="category-text">
            {capitalizeFirstLetter(categoryItems.name)}
          </h2>
          <div className="category-items">
            {categoryItems.products.map((item) => (
              <CategoryItem
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPage;
