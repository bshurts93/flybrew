import React from "react";

class Test extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h1>TEST</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          Count up
        </button>
      </div>
    );
  }
}

export default Test;
