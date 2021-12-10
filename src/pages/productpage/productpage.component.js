import React from "react";

import "./productpage.styles.scss";

class ProductPage extends React.Component {
  state = {
    clickedImage: this.props.product.gallery[0]
  }

  setImage = (img) => {
    this.setState({
      clickedImage: img 
    })
  }

  render() {
    const { product } = this.props;

    return (
      <div className="product-container">
        <div className="product-gallery">
          <div className="product-gallery-small">
            {product.gallery.map((image) => (
              <img key={image} className="product-gallery-small-image" src={image} onClick={() => this.setImage(image)}/>
            ))}
          </div>
          <div className="product-gallery-big"><img className='product-gallery-big-image' src={this.state.clickedImage} /></div>
        </div>
        <div className="product-info"></div>
      </div>
    );
  }
}

export default ProductPage;
