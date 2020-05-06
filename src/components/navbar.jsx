import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand mb-0 h1">Navbar</span>
        <span className="badge badge-secondary">ShoppingCart</span>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
