import React, { Component } from "react";
import Product from "./product";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

class Products extends Component {
  state = {
    products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    pageSize: 6,
    currentPage: 1,
  };

  handlePageChannge = (page) => {
    this.setState({ currentPage: page });
    console.log(page);
  };
  render() {
    const { products, pageSize, currentPage } = this.state;
    return (
      <div className="container">
        <div className="row">
          {paginate(currentPage, pageSize, products).map((p) => (
            <div key={p} className="col-4">
              <Product></Product>
            </div>
          ))}
        </div>
        <Pagination
          productsCount={products.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChannge}
          currentPage={currentPage}
        />
      </div>
    );
  }
}

export default Products;
