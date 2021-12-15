import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./productpage.styles.scss";

class ProductPage extends React.Component {
  state = {
    clickedImage: this.props.product.gallery[0],
    selecetedAttributes: {},
  };

  setImage = (img) => {
    this.setState({
      clickedImage: img,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      selecetedAttributes: { ...this.state.selecetedAttributes, [name]: value },
    });
  };

  render() {
    const { product, addItem, currency } = this.props;

    const price = product.prices
      .filter((item) => item.currency === currency)
      .map((filteredItem) => filteredItem.amount);

    return (
      <div className="homepage-overlay">
        <div className="container">
          <div className="product-container">
            <div className="product-gallery">
              <div className="product-gallery-small">
                {product.gallery.map((image) => (
                  <img
                    key={image}
                    className={`product-gallery-small-image ${
                      this.state.clickedImage === image
                        ? "product-gallery-small-image-selected"
                        : ""
                    }`}
                    src={image}
                    onClick={() => this.setImage(image)}
                    alt={product.name}
                  />
                ))}
              </div>
              <div className="product-gallery-big">
                <img
                  className="product-gallery-big-image"
                  src={this.state.clickedImage}
                  alt={product.name}
                />
              </div>
            </div>
            <div className="product-info">
              <p className="product-info-name">{product.brand}</p>
              <p className="product-info-brand">{product.name}</p>
              {product.attributes.map((attribute) => (
                <form
                  name={attribute.id}
                  key={attribute.id}
                  className="attribute-form"
                >
                  <p className="attribute-name">{attribute.id}:</p>
                  <div className="attribute-btn">
                    {attribute.items.map((item) => (
                      <div key={item.id}>
                        <input
                          type="radio"
                          name={attribute.id}
                          id={`${item.id}-${attribute.id}`}
                          value={item.value}
                          checked={
                            this.state.selecetedAttributes[
                              `${attribute.id}`
                            ] === item.value
                          }
                          onChange={(e) => this.handleChange(e)}
                        />

                        <label
                          className={`attribute-radio-label attribute-radio-label-${attribute.type}`}
                          style={
                            attribute.type === "swatch"
                              ? { backgroundColor: `${item.value}` }
                              : null
                          }
                          htmlFor={`${item.id}-${attribute.id}`}
                        >
                          {attribute.type === "swatch" ? null : item.value}
                        </label>
                      </div>
                    ))}
                  </div>
                </form>
              ))}
              <p className="product-price">Price:</p>{" "}
              <span className="product-price-number">
                {getCurrencySymbol(currency)}
                {price}
              </span>
              {product.inStock ? (
                <CustomButton
                  buttonStyle={"btn-add-to-cart"}
                  buttonSize={"btn-huge"}
                  onClick={() =>
                    addItem([product, this.state.selecetedAttributes])
                  }
                >
                  Add to cart
                </CustomButton>
              ) : (
                <CustomButton
                  buttonStyle={"btn-add-to-cart-disabled"}
                  buttonSize={"btn-huge"}
                  disabled={true}
                >
                  Out of Stock
                </CustomButton>
              )}
              <p
                className="product-description"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

const mapStateToProps = ({ currency: { currency } }) => ({
  currency,
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
