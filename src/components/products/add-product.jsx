import React, { Component } from "react";
import Form from "./../common/form";
import Joi from "joi-browser";
import { getBrands } from './../../servicies/brandsService';
import { getCategories } from './../../servicies/categoriesService';

class AddProduct extends Form {
  state = { data: { product: "" }, errors: {}, brands: [], categories: [] };

  schema = {
    brand: Joi.string().required().label("Brands"),
  };

  doSubmit = async () => {
    // try {
    //   const { data } = this.state;
    //   await addBrand(data.brand);
    //   window.location = "/admin-brands";
    // } catch (ex) {
    //   if (ex.respone && ex.respone.status === 400) {
    //     const errors = { ...this.status.errors };
    //     errors.brand = ex.respone.data;
    //     this.setState({ errors });
    //   }
    // }
  };

  async componentDidMount() {
    const brands = [];
    const categories = [];
    const BrandResponse = await getBrands();
    for (let brand of BrandResponse.data.data) brands.push(brand);
    const categoryResponse = await getCategories();
    for (let category of categoryResponse.data.data) categories.push(category);
    this.setState({ brands , categories});
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("description", "Description")}
          {this.renderInput("price", "Price")}
          {this.renderInput("product", "Product")}
          {this.renderInput("product", "Product")}
          <label>Category</label>
          <select class="form-control my-1">
            {this.state.categories.map(category=><option key={category.id} >{category.category_name}</option>)}
          </select>
          <label>Brand</label>
          <select class="form-control my-1">
            {this.state.brands.map(brand=><option key={brand.id} >{brand.brand_name}</option>)}
          </select>
          <br/>
          {this.renderButton("Add")}
        </form>
      </div>
    );
  }
}

export default AddProduct;
