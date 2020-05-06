import React, { Component } from "react";

class Product extends Component {
  state = {
    product: {
      Title: "Title",
      description: "Description",
      images: "https://dummyimage.com/300x200/000000/fff",
      price: 123,
      in_stock: true,
      quantity: 123,
      one_category: "category ",
      one_brand: "brand",
    },
  };
  render() {
    return(
        <div className="card my-4" style={{width: 250}}>
          <img className="card-img-top" src={this.state.product.images} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        );
  }
}

export default Product;
