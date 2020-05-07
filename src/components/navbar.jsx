import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light justify-content-between">
          <a className="navbar-brand">Navbar</a>
            <span className="badge badge-secondary mx-2">ShoppingCart</span>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
