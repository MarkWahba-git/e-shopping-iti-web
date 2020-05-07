import React, { Component } from "react";
import Products from "./components/products";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Header from "./components/header";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header/>
        <Products />
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
