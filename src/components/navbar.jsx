import React, { Component } from "react";
import Search from "./search";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          <Search />
          <div>
            <span className={"badge badge-warning"}>{this.props.productsCount}</span>
            <Link to="/cart" className="badge badge-secondary mx-2">
              ShoppingCart
            </Link>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
