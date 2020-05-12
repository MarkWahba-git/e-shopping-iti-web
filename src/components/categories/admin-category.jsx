import React from "react";
import Form from "../common/form";
import Joi from "joi-browser";

class AdminCategory extends Form {
  state = { data: { category: "" }, errors: {} };

  schema = {
    category: Joi.string().required().label("Category"),
  };

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("category", "Category")}
          {this.renderButton("Add")}
        </form>
      </div>
    );
  }
}

export default AdminCategory;
