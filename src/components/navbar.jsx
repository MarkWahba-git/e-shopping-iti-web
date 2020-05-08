import React, { Component } from "react";
import Search from "./search";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <NavLink to="/" className="navbar-brand">
            Home
          </NavLink>
          <Search />
          <div>
            <span className={"badge badge-warning"}>
              {this.props.productsCount}
            </span>
            <NavLink to="/cart" className="badge badge-secondary mx-2">
              ShoppingCart
            </NavLink>
          </div>
          <div>
            <NavLink to="/login" className="mx-1">
              Login
            </NavLink>
            <NavLink to="/register" className="mx-1">
              Register
            </NavLink>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
