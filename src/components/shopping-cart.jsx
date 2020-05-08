import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {};
  render() {
    return (
        <div className="container">

      <div className="card">
        <div className="card-header">Shopping Cart</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            check out
          </a>
        </div>
      </div>
        </div>
    );
  }
}

export default ShoppingCart;
