import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    count: 0,
    items: [{ id: 1, quantity: 0 }, { id: 2, quantity: 0 }]
  };

  increaseHandle = id => {
    console.log(id);

    var items = this.state.items.map(e => {
      //console.log(e.id);
      if (e.id === id) e.quantity++;
      return e;
    });

    this.setState({
      items: items
    });
  };

  decreaseHandle = id => {
    console.log(id);

    var items = this.state.items.map(e => {
      //console.log(e.id);
      if (e.id === id && e.quantity > 0) e.quantity--;
      return e;
    });

    this.setState({
      items: items
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map(e => (
            <li key={e.id}>
              <Counter
                item={e}
                increaseHandle={this.increaseHandle}
                decreaseHandle={this.decreaseHandle}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Counters;
