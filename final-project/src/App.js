import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Dash from "./components/Dash";

class App extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
    isLoggedIn: false
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log("New user:", newUser);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <Router>
          <Route
            exact
            path="/"
            render={routeProps => (
              <SignIn
                handleChange={this.handleChange}
                onSubmit={this.onSubmit}
                errors={errors}
              />
            )}
          />
          <Route
            exact
            path="/signin"
            render={routeProps => (
              <SignIn
                handleChange={this.handleChange}
                onSubmit={this.onSubmit}
                errors={errors}
              />
            )}
          />{" "}
          <Route
            exact
            path="/register"
            render={routeProps => (
              <Register
                handleChange={this.handleChange}
                onSubmit={this.onSubmit}
                errors={errors}
              />
            )}
          />{" "}
          <Route exact path="/dash" component={Dash} />
        </Router>
      </div>
    );
  }
}

export default App;
