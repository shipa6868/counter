import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./component/counters";

class App extends Component {
  render() {
    return (
      <div>
        <Counters />
      </div>
    );
  }
}

export default App;
