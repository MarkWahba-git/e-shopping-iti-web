import React, { Component } from "react";
import Products from "./components/products";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import { Route, Redirect, Switch } from "react-router-dom";
import ShoppingCart from "./components/shopping-cart";
import NotFound from "./components/not-found";

class App extends Component {
  state = { products: [] };

  handleProductAdd = (product) => {
    let products = [...this.state.products, product];
    this.setState({ products });
  };

  handleClearCart = () => {
    let products = [];
    this.setState({ products });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar productsCount={this.state.products.length} />
        <Header />
        <div className="content">
          <Switch>
            <Route
              path="/cart"
              exact
              render={(props) => (
                <ShoppingCart
                  {...props}
                  products={this.state.products}
                  onClearCart={this.handleClearCart}
                />
              )}
            />
            <Route
              path="/products"
              exact
              render={(props) => (
                <Products {...props} onProductadd={this.handleProductAdd} />
              )}
            />
            <Route path="/notFound" exact component={NotFound} />
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
