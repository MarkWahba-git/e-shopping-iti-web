import React, { Component } from "react";
import Products from "./components/products/products";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";
import { Route, Redirect, Switch } from "react-router-dom";
import ShoppingCart from "./components/shopping-cart";
import NotFound from "./components/not-found";
import LogIn from "./components/authentication/login";
import Register from "./components/authentication/register";
import AddProduct from "./components/products/add-product";
import AddBrand from "./components/brands/add-brand";
import AddCategory from "./components/categories/add-category";

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
            <Route path="/add/product" exact component={AddProduct} />
            <Route path="/add/brand" exact component={AddBrand} />
            <Route path="/add/category" exact component={AddCategory} />
            <Route path="/login" exact component={LogIn} />
            <Route path="/register" exact component={Register} />
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
