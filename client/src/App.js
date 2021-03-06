import { render } from "@testing-library/react";
import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import "./App.css";

export default class App extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <>
        <div className="navBar">
          <button onClick={this.Toggle}>
            <FaAlignRight />
          </button>
          <ul
            className={this.state.toggle ? "nav-links show-nav" : "nav-links"}
          >
            <li href="#">Home</li>
            <li href="#">About</li>
            <li href="#">Signup</li>
          </ul>
        </div>
      </>
    );
  }
}
