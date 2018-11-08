import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="instructions">
          <p>
            Glad to see you made it. Welcome to the games!
            <br />
            <i className="hidden">Hint for puzzle 5</i>
            <br />
            It's very simple, find the answer to the each question.
            <br />
            <br />
            Text ### the answer and we'll direct you to the next stage.
            <br />
            <br />
            Understand?
          </p>
        </div>
      </div>
    );
  }
}
