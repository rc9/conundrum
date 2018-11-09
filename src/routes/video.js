import React, { Component } from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import '../styles/index.css';
import infomercial from '../images/clue4.gif'

export default class Video extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="shamwow-gif">
          <img src={infomercial} />
        </div>
        <Footer />
      </div>
    );
  }
}
