import React, { Component } from "react";
import Product from "./product";
import Pagination from "./pagination";

class Products extends Component {
  state = {
    products: [1, 2, 3, 4, 5, 6],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Product></Product>
          </div>
          <div className="col-3">
            <Product></Product>
          </div>
          <div className="col-3">
            <Product></Product>
          </div>
          <div className="col-3">
            <Product></Product>
          </div>
          <div className="col-3">
            <Product></Product>
          </div>
        </div>
        <Pagination></Pagination>
      </div>
    );
    // this.state.products.map((p) => {
    //   <Product />;
    // });
  }
}

export default Products;
