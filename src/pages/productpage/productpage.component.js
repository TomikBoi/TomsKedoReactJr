import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import CustomButton from "../../components/custom-button/custom-button.component";
import "./productpage.styles.scss";

class ProductPage extends React.Component {
  state = {
    clickedImage: this.props.product.gallery[0],
    selecetedAttributes: "",
    fieldErrors: {},
  };

  setImage = (img) => {
    this.setState({
      clickedImage: img,
    });
  };

  handleAttrChange = (evt) => {
    const { name, value } = evt.target;

    this.setState({
      selecetedAttributes: { ...this.state.selecetedAttributes, [name]: value },
    });
  };

  handleChange = (evt) => {
    const fieldErrors = {
      ...this.state.fieldErrors,
      [evt.target.name]: "",
    };

    this.setState({ fieldErrors });
  };

  handleInvalid = (evt) => {
    evt.preventDefault();
    const fieldErrors = {
      ...this.state.fieldErrors,
      [evt.target.name]: evt.target.validationMessage,
    };

    this.setState({ fieldErrors });
  };

  render() {
    const { product, addItem, currency } = this.props;

    const handleSubmit = (evt) => {
      evt.preventDefault();
      addItem([product, this.state.selecetedAttributes]);
    };

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
              <form
                onSubmit={(e) => handleSubmit(e)}
                onChange={this.handleChange}
                onInvalid={this.handleInvalid}
                className="attribute-form"
              >
                {product.attributes.map((attribute) => (
                  <div key={attribute.id}>
                    <p className="attribute-name">{attribute.id}:</p>
                    <div className="attribute-btn">
                      {attribute.items.map((item) => (
                        <div key={item.id}>
                          <input
                            required
                            type="radio"
                            name={attribute.name}
                            id={`${item.id}-${attribute.id}`}
                            value={item.value}
                            checked={
                              this.state.selecetedAttributes[
                                `${attribute.id}`
                              ] === item.value
                            }
                            onChange={(e) => this.handleAttrChange(e)}
                          />
                          <label
                            className={`attribute-radio-label attribute-radio-label-${
                              attribute.type
                            } ${
                              this.state.fieldErrors[`${attribute.name}`]
                                ? "error"
                                : ""
                            }`}
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
                  </div>
                ))}
                <p className="product-price">Price:</p>{" "}
                <p className="product-price-number">
                  {getCurrencySymbol(currency)}
                  {price}
                </p>
                {product.inStock ? (
                  <button className="btn btn-add-to-cart btn-huge" type="submit">Add to cart</button>
                ) : (
                  <CustomButton
                    buttonStyle={"btn-add-to-cart-disabled"}
                    buttonSize={"btn-huge"}
                    disabled={true}
                  >
                    Out of Stock
                  </CustomButton>
                )}
              </form>
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
