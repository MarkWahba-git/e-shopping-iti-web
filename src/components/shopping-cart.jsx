import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {};
  render() {
    const { products, onClearCart } = this.props;
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">Shopping Cart</div>
          <div className="card-body">
            {products.length ? (
              products.map((product) => (
                <p className="card-text">{product.Title}</p>
              ))
            ) : (
              <p className="card-text">No Products in the Cart</p>
            )}

            <a href="#" className="btn btn-primary mx-1">
              check out
            </a>

            <a onClick={onClearCart} className="btn btn-danger mx-1">
              clear cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
