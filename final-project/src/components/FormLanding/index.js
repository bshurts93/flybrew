import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Register from "../Register";
import SignIn from "../SignIn";

class FormLanding extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
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
    return (
      <Router>
        <SignIn />
        <Route exact path="/welcome/register" component={Register} />
      </Router>
    );
  }
}

export default FormLanding;
