import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = { pushed: false }
  }

  togglePush = () => this.setState({ pushed: !this.state.pushed })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <button onClick={() => this.togglePush()}>Change the state</button>
        </p>
        <h4>Current State:</h4>
        <p>{this.state.pushed.toString()}</p>
      </div>
    );
  }
}

export default App;
