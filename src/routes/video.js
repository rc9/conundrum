import React, { Component } from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import '../styles/index.scss';
import infomercial from '../images/clue4.gif'

export default class Video extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="shamwow-gif">
          <img src={infomercial} alt="call us now at 817-873-6318"/>
        </div>
        <Footer />
      </div>
    );
  }
}
