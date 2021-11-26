import React from "react";
import "./homepage.styles.scss";
import CategoryItem from "../components/category-item/category-item.component";
import capitalizeFirstLetter from "../helper/capitalizeFirstLetter";

class HomePage extends React.Component {
  render() {
    const { categoryItems } = this.props;

    return (
      <div className="homepage">
        <div className="homepage-container">
          <h2 className="homepage-category-text">
            {capitalizeFirstLetter(categoryItems.name)}
          </h2>
          <div className="homepage-items">
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

export default HomePage;
