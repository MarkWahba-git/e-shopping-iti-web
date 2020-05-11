import React, { Component } from "react";
import Input from "./../common/input";

class LogIn extends Component {
  state = {
    account: { email: "", password: "" },
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("logged in to the server");
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Input
            name="email"
            value={account.email}
            onChange={this.handleChange}
            label="Email"
            type="email"
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            onChange={this.handleChange}
            label="Password"
            type="password"
            error={errors.password}
          />
          <button type="submit" className="btn btn-primary">
            login
          </button>
        </form>
      </div>
    );
  }
}

export default LogIn;
