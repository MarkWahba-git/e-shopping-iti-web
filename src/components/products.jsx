import React, { Component, useLayoutEffect } from "react";
import Product from "./product";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import Categories from "./categories";
import Brands from "./brands";
import Search from "./search";
import { productFilter } from "../utils/filter-product";
import { getProducts } from "../servicies/fakeProducts";
import { sortProducts } from "../utils/sortProducts";
import SortBy from "./sortby";

class Products extends Component {
  state = {
    products: getProducts(),
    pageSize: 6,
    currentPage: 1,
    currentCategory: "All Categories",
    currentBrand: "All Brands",
    sortBy: { element: "Title", order: "asc" },
  };

  handlePageChannge = (page) => {
    this.setState({ currentPage: page });
    console.log(page);
  };

  handleCategoryClick = (category) => {
    this.setState({ currentCategory: category, currentPage: 1 });
  };

  handleBrandClick = (brand) => {
    this.setState({ currentBrand: brand, currentPage: 1 });
  };
  render() {
    const {
      products,
      pageSize,
      currentPage,
      currentCategory,
      currentBrand,
      sortBy,
    } = this.state;

    const filterdProducts = productFilter(
      products,
      currentCategory,
      currentBrand,
      currentPage
    );

    const sortedProduct = sortProducts(
      filterdProducts,
      sortBy.element,
      sortBy.order
    );

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {paginate(currentPage, pageSize, sortedProduct).map((product) => (
                <div key={product.id} className="col-4">
                  <Product productId={product.id} product={product} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-3">
            <div>
              <SortBy />
            </div>
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
        </div>
        <div className="row justify-content-center">
          <Pagination
            productsCount={sortedProduct.length}
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
