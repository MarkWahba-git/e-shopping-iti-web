import React, { Component } from "react";
import Products from "./components/products";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import { Route } from "react-router-dom";
import ShoppingCart from "./components/shopping-cart";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <div className="content">
            <Route path="/" exact component={Products}></Route>
            <Route path="/cart" exact component={ShoppingCart}></Route>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
