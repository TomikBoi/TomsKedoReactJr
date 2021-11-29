import React from "react";
import CategoryItem from "../../components/category-item/category-item.component"
import "./homepage.styles.scss";


class HomePage extends React.Component {
  render() {
    const { categoryItems } = this.props;

    return (
      <div className="homepage">
        <div className="homepage-container">
          <h2 className="homepage-category-text">All</h2>
          <div className="homepage-items">
            {categoryItems
              .map((item) => item.products)
              .map((item) =>
                item.map((item) => (
                  <CategoryItem
                    key={item.id}
                    item={item}
                  />
                ))
              )}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
