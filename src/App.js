import React, { Component } from "react";
import Products from "./components/products";
import Navbar from "./components/navbar";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Products />;
      </React.Fragment>
    );
  }
}

export default App;
