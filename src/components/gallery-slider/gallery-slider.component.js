import React from "react";

import "./gallery-slider.styles.scss";

class GallerySlider extends React.Component {
  state = {
    index: 0,
  };

  render() {
    const { images, classes } = this.props;
    const nextImage = () => {
      this.setState((prevState) => {
        return { index: prevState.index + 1 };
      });
    };

    const prevImage = () => {
      this.setState((prevState) => {
        return { index: prevState.index - 1 };
      });
    };

    return (
      <>
        <img className={classes} src={images[this.state.index]} alt="product"/>
        {this.state.index !== 0 ? (
          <span
            className="gallery-slider-image-btn prev"
            onClick={() => prevImage()}
          >
            &#10094;
          </span>
        ) : (
          ""
        )}
        {this.state.index !== images.length - 1 ? (
          <span
            className="gallery-slider-image-btn next"
            onClick={() => nextImage()}
          >
            &#10095;
          </span>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default GallerySlider;
