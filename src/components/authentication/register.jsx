import React, { Component } from "react";
import Input from "./../common/input";

class Register extends Component {
  state = {
    account: { username: "", email: "", password: "", confirmpassword: "" },
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registered !   ");
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            onChange={this.handleChange}
            label="UserName"
            error={errors.username}
          />
          <Input
            name="email"
            value={account.email}
            onChange={this.handleChange}
            label="Email"
            type="email"
            error={errors.email}
          />
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            label="Password"
            type="password"
            error={errors.password}
          />
          <Input
            name="confirmpassword"
            value={account.confirmpassword}
            onChange={this.handleChange}
            label="ConfirmPassword"
            type="password"
            error={errors.confirmpassword}
          />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
