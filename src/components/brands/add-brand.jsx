import React from "react";
import Form from "./../common/form";
import Joi from "joi-browser";

class AddBrand extends Form {
  state = { data: { brand: "" }, errors: {} };

  schema = {
    brand: Joi.string().required().label("Brand"),
  };

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("brand", "Brand")}
          {this.renderButton("Add")}
        </form>
      </div>
    );
  }
}

export default AddBrand;
