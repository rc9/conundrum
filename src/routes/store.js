import React, { Component } from 'react';
import Header from '../header.js'
import '../styles/index.scss';
import '../styles/store.scss';
import soonImg from '../images/coming-soon.jpg';
import Footer from '../footer.js';

export default class Store extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="store">
            <h2 className="store-title">Star Store</h2>
            <div className="image-list">
                {[...Array(9)].map((_, i) =>
                    <div className="image-li" key={i}>
                        <img className="stock-img" src={soonImg} alt="Coming Soon..."/>
                        <span>30 🌟</span>
                    </div>
                )}
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}
