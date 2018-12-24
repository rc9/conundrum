import React, { Component } from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import '../styles/index.scss';
import snowy from '../images/snowy-gold.gif';

export default class Christmas extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="gif">
            <img src={snowy} alt="Winter is filled with cupidly dancers,
Holiday movies, toys, and gay prancers. 
Vixens feign joy to trap dashers’ asses
Coming like comets down donner passes.
All this merriment and cheer but alas
But who is missing from this snowy class…
"/>
        </div>
        <Footer />
      </div>
    );
  }
}
