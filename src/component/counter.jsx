import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.increaseHandle(this.props.item.id)}>
          increase
        </button>
        <button onClick={() => this.props.decreaseHandle(this.props.item.id)}>
          decrease
        </button>
        {this.props.item.quantity}
      </div>
    );
  }
}

export default Counter;
