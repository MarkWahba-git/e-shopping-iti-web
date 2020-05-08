import React, { Component } from "react";
class LogIn extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: {},
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
    console.log(this.state.account);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("logged in to the server");
  };

  render() {
    const { account } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              onChange={this.handleChange}
              value={account.name}
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onChange={this.handleChange}
              value={account.password}
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            login
          </button>
        </form>
      </div>
    );
  }
}

export default LogIn;
