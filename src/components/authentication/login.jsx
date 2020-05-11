import React from "react";
import Input from "./../common/input";
import Joi from "joi-browser";
import Form from "../common/form";

class LogIn extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    console.log("Submitted");
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LogIn;
