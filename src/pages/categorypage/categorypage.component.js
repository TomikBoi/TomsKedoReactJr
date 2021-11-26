import React from "react";
import "./categorypage.styles.scss";
import CategoryItem from "../../components/category-item/category-item.component"
import capitalizeFirstLetter from "../../helper/capitalizeFirstLetter";

class CategoryPage extends React.Component {
  render() {
    const { categoryItems } = this.props;
    
    return (
      <div className="category">
        <div className="category-container">
          <h2 className="category-text">
            {capitalizeFirstLetter(categoryItems.name)}
          </h2>
          <div className="category-items">
            {categoryItems.products.map(({ id, name, gallery, prices }) => (
              <CategoryItem
                key={id}
                name={name}
                prices={prices}
                gallery={gallery}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPage;
