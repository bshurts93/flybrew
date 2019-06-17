import React from "react";
import Register from "../Register";

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

  render() {
    return <Register handleChange={this.handleChange} />;
  }
}

export default FormLanding;
