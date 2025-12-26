import { Component } from "react";

export class CounterApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    inc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    dec = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    reset = () => {
        this.setState({
            count: 0
        })
    }


    render() {

        return (
            <div style={{ textAlign: "center", marginTop: '50px' }}>
                <h1>Counter App : <span>{this.state.count}</span></h1>

                <button onClick={this.dec} style={{ margin: '0px 10px' }}>-</button>
                <button onClick={this.inc} style={{ margin: '0px 10px' }}>+</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}


{/*  if we use normal function , then we should bind them

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    // 1️⃣ state
    this.state = {
      count: 0
    };

    // 2️⃣ binding normal functions
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  // 3️⃣ normal functions
  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  // 4️⃣ render UI
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Counter App</h2>
        <h1>{this.state.count}</h1>

        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement} style={{ margin: "0 10px" }}>
          -
        </button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counter;


*/}