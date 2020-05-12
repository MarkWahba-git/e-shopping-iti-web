import React, { Component } from "react";
import { logout } from "../../servicies/authService";

class Logout extends Component {
  componentDidMount() {
    logout();
    window.location = "/login";
  }
  render() {
    return null;
  }
}

export default Logout;
