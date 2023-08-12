import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <button onClick={this.incrementCount}>Count {this.state.count}</button>
    );
  }
}

export default Counter;
