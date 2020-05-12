import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {};
  handleCheckOut = (products) => {
    console.log(products);
  };
  render() {
    const { products, onClearCart } = this.props;
    return (
      <div className="container">
        <div className="card">
          <div className="card-header">Shopping Cart</div>
          <div className="card-body">
            {products.length ? (
              this.handleProductRepetition(products).map((product) => (
                <div className="container">
                  <div className="row">
                    <div key={product.id} className="card-text col-9">
                      {product.title}
                    </div>
                    <div className="col-2">
                      {product.count} x {product.price}
                    </div>
                  </div>
                  <hr />
                </div>
              ))
            ) : (
              <p className="card-text">No Products in the Cart</p>
            )}
            {products.length ? (
              <div>
                <p className="col-9">Total = {this.getTotalPrice(products)}</p>
                <a
                  onClick={() => this.handleCheckOut(products)}
                  className="btn btn-primary mx-1"
                >
                  check out
                </a>

                <a onClick={onClearCart} className="btn btn-danger mx-1">
                  clear cart
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
  handleProductRepetition(products) {
    let order = [];
    let count = [];

    products.forEach((product) => {
      if (!order.includes(product)) {
        product.count = 1;
        order.push(product);
      } else product.count += 1;
    });
    return order;
  }

  getTotalPrice(products) {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });
    return total;
  }
}

export default ShoppingCart;
