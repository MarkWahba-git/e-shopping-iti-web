import React, { Component } from "react";
import Search from "./search";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  state = {};
  render() {
    const { user } = this.props;
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <NavLink to="/" className="navbar-brand">
            Home
          </NavLink>
          {!user && (
            <React.Fragment>
              <NavLink to="/login" className="nav-item nav-link">
                Login
              </NavLink>
              <NavLink to="/register" className="nav-item nav-link">
                Register
              </NavLink>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <Search />
              <div>
                <span className={"badge badge-warning"}>
                  {this.props.productsCount}
                </span>
                <NavLink to="/cart" className="badge badge-secondary mx-2">
                  ShoppingCart
                </NavLink>
              </div>
              <NavLink to="/logout" className="nav-item nav-link">
                logout
              </NavLink>
            </React.Fragment>
          )}
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
