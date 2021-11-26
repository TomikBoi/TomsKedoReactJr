import React from "react";
import "./homepage.styles.scss";
import CategoryItem from "../components/category-item/category-item.component";
import capitalizeFirstLetter from '../helper/capitalizeFirstLetter'

class HomePage extends React.Component {
  state = {
    category: "tech"
  }


  render() {
    const { items } = this.props;
    //  console.log(items)
    const productsArr = items
      .filter((item) => item.name === this.state.category)
      .map((filteredItem) => filteredItem.products);
    const product = productsArr[0];

    return (
      <div className="homepage">
        <div className="homepage-container">
          <h2 className="homepage-category-text">{capitalizeFirstLetter(this.state.category)}</h2>
          <div className="homepage-items">
          {product.map(({ id, name, gallery, prices }) => (
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
