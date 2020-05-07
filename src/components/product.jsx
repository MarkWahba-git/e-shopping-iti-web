import React, { Component } from "react";
import { getProduct } from "../servicies/fakeProducts";

class Product extends Component {
  render() {
    const {
      id,
      Title,
      description,
      images,
      price,
      in_stock,
      quantity,
      category,
      brand,
    } = this.props.product;
    return (
      <div className="card ml-5 mt-5" style={{ width: 250 }}>
        <img className="card-img-top" src={images} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-secondary mx-1">
            View
          </a>
          <a href="#" className="btn btn-primary mx-1">
            Add
          </a>
          <a href="#" className="btn btn-danger mx-1">
            Del
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
