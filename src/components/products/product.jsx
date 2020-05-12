import React, { Component } from "react";
class Product extends Component {
  render() {
    const { product, onProductAdd } = this.props;

    return (
      <div className="card ml-5 mt-5" style={{ width: 250 }}>
        <img
          className="card-img-top"
          src={product.images}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{product.Title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a className="btn btn-primary mx-1">View</a>
          <a
            onClick={() => onProductAdd(product)}
            className="btn btn-primary mx-1"
          >
            Add
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
