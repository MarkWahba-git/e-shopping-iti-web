import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand">Navbar</a>
          <form className="form-inline">
            <span className="badge badge-secondary mx-2">ShoppingCart</span>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
