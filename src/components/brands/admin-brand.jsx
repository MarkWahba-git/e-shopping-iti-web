import React, { Component } from "react";
import { getBrands, addBrand } from "./../../servicies/brandsService";
import Form from "./../common/form";
import Joi from "joi-browser";

class AdminBrand extends Form {
  state = { data: { brand: "" }, errors: {}, brands: [] };

  schema = {
    brand: Joi.string().required().label("Brands"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await addBrand(data);
      window.location = "/admin-brands";

      // const oldBrands = this.state.brands;
      // this.setState({brands:[...oldBrands]})
    } catch (ex) {
      if (ex.respone && ex.respone.status === 400) {
        const errors = { ...this.status.errors };
        errors.email = ex.respone.data;
        this.setState({ errors });
      }
    }
  };

  async componentDidMount() {
    const brands = [];
    const response = await getBrands();
    for (let brand of response.data.data) brands.push(brand.brand_name);
    this.setState({ brands });
    console.log(brands);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("brand", "Brand")}
          {this.renderButton("Add")}
        </form>
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Brands</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.brands.map((brand) => (
              <tr>
                <td>{brand}</td>

                <td>
                  <a className="btn btn-danger">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminBrand;
