import React from "react";
import { connect } from "react-redux";
import { addAttribute } from "../../redux/cart/cart.actions";
import { getCurrencySymbol } from "../../helper/getCurrencySymbol";
import "./productpage.styles.scss"

class ProductPage extends React.Component {
  state = {
    clickedImage: this.props.product.gallery[0],
    selecetedAttributes: {}
  }

  setImage = (img) => {
    this.setState({
      clickedImage: img 
    })
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      
     selecetedAttributes: {... this.state.selecetedAttributes,[name]: value }
    });
  };

  render() {
    const { product, addAttribute, currency } = this.props;

    const price = product.prices
      .filter((item) => item.currency === currency)
      .map((filteredItem) => filteredItem.amount);


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
        <div className="product-info">
        <p className='product-info-name'>{product.brand}</p>
        <p className='product-info-brand'>{product.name}</p>

        {product.attributes.map((attribute) => (
          <form name={attribute.id} key={attribute.id} className="attribute-form">
          <p className='attribute-name'>{attribute.id}:</p>
            <div className="attribute-btn">
              {attribute.items.map((item) => (
                <div key={item.id}>
                  <input
                    type="radio"
                    name={attribute.id}
                    id={`${item.id}-${attribute.id}-${product.id}`}
                    value={item.value}
                    checked={this.state.selecetedAttributes[`${attribute.id}`] === item.value}
                    onChange={(e) =>
                      this.handleChange(e)
                    }
                  />

                  <label
                    className={`attribute-radio-label attribute-radio-label-${attribute.type} `} 
                    style={ attribute.type === "swatch" ? { backgroundColor: `${item.value}` } : null}
                    htmlFor={`${item.id}-${attribute.id}-${product.id}`}
                  >
                    {attribute.type === "swatch" ? null : item.value}
                  </label>
                </div>
              ))}
            </div>
          </form>
        ))}

        <p className='product-price'>Price:</p> <span className="product-price-number">{getCurrencySymbol(currency)}{price}</span>
 
        <button>add to cart</button>

        <p>Longer Description</p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAttribute: (item) => dispatch(addAttribute(item)),
});



const mapStateToProps = ({ currency: { currency } }) => ({
  currency,
});

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)
