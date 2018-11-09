import React, { Component } from 'react';
import '../styles/index.css';
import infomercial from '../images/clue4.gif'

export default class Video extends Component {
  render() {
    return (
      <div className="App">
        <div className="shamwow-gif">
          <img src={infomercial} />
        </div>
      </div>
    );
  }
}
