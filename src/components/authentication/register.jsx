import React from "react";
import Input from "./../common/input";
import { register } from "../../servicies/usersService";
import Form from "./../common/form";
import Joi from "joi-browser";

class Register extends Form {
  state = {
    data: { name: "", email: "", password: "", confirmPassword:"" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Username"),
    email: Joi.string().required().label("email"),
    password: Joi.string().required().min(5).label("Password"),
    confirmPassword: Joi.string().required().label("ConfirmPassword"),
  };

  doSubmit(){
    console.log("registerd");
    
  }

  render() {
    const { data, errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "UserName")}
          {this.renderInput("email", "Email", "email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("confirmPassword", "Confirm Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;
