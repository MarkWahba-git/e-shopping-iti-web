import React, { Component } from "react";
import Products from "./components/products";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import { Route, Redirect, Switch } from "react-router-dom";
import ShoppingCart from "./components/shopping-cart";
import NotFound from "./components/not-found";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <div className="content">
          <Switch>
            <Route path="/cart" exact component={ShoppingCart}></Route>
            <Route path="/products" exact component={Products}></Route>
            <Route path="/notFound" exact component={NotFound}></Route>
            <Redirect from="/" to="/products" />
            <Redirect to="/notFound" />
          </Switch>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
