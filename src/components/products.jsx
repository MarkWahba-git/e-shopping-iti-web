import React, { Component } from "react";
import Product from "./product";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import Categories from "./categories";
import Brands from "./brands";

class Products extends Component {
  state = {
    products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    pageSize: 6,
    currentPage: 1,
    currentCategory: "All Categories",
    currentBrand: "All brands",
  };

  handlePageChannge = (page) => {
    this.setState({ currentPage: page });
    console.log(page);
  };

  handleCategoryClick = (category) => {
    this.setState({ currentCategory: category });
  };

  handleBrandClick = (brand) => {
    this.setState({ currentBrand: brand });
  };
  render() {
    const {
      products,
      pageSize,
      currentPage,
      currentCategory,
      currentBrand,
    } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div className="my-4">
              {" "}
              <Categories
                onCategoryClick={this.handleCategoryClick}
                currentCategory={currentCategory}
              />
            </div>
            <div className="my-4">
              {" "}
              <Brands
                currentBrand={currentBrand}
                onBrandClick={this.handleBrandClick}
              />
            </div>
          </div>
          <div className="col">
            <div className="row">
              {paginate(currentPage, pageSize, products).map((p) => (
                <div key={p} className="col-4">
                  <Product></Product>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Pagination
            productsCount={products.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChannge}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Products;
