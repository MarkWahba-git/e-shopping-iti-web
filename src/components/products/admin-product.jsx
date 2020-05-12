import React, { Component } from "react";
import { Link } from 'react-router-dom';


class AdminProduct extends Component {
  state = {};
  render() {
      console.log(this.props);
      
    return (
      <div className="container">
        <Link to="/add-product" className="btn btn-primary m-2">Add Product</Link>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {/* {this.state.brands.map((brand) => (
              <tr key={brand.id}>
                <td>{brand.brand_name}</td>
                <td>
                  <a
                    onClick={() => this.handleDelete(brand.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminProduct;
