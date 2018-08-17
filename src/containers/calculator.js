import React from "react";
import Key from "../presentational/key";
import Display from "../presentational/display";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "",
      stack: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.createKeys = this.createKeys.bind(this);
  }

  handleChange(val) {
    let newDisplay = this.state.display;
    let newStack = this.state.stack;

    let n = newStack.length;

    let numbers = "0123456789.";
    let operators = "+-/x";

    if (val === "C") {
      newDisplay = "";
      newStack = [];
    } else if (val === "=") {
      newDisplay = eval(newDisplay.replace(/x/gi, "*")).toString();
      newStack = [];
    } else if (numbers.includes(val)) {
      if (n % 2 === 0) {
        newStack.push(val);
      } else {
        newStack[n - 1] = newStack[n - 1] + val;
      }
      newDisplay = newStack.join(" ");
    } else if (operators.includes(val)) {
      newStack.push(val);
      newDisplay = newStack.join(" ");
    }
    this.setState({ display: newDisplay, stack: newStack });
  }

  createKeys() {
    const keys = [
      "C",
      "()",
      "%",
      "/",
      "7",
      "8",
      "9",
      "x",
      "4",
      "5",
      "6",
      "-",
      "1",
      "2",
      "3",
      "+",
      "+/-",
      "0",
      ".",
      "="
    ];
    const res = keys.map(key => {
      return <Key value={key} onClick={this.handleChange} />;
    });
    return res;
  }

  render() {
    return (
      <div className="Calculator">
        <Display value={this.state.display} />
        {this.createKeys()}
      </div>
    );
  }
}
