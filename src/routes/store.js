import React, { Component } from 'react';
import '../styles/index.css';
import '../styles/store.scss';
import soonImg from '../images/coming-soon.jpg';

export default class Store extends Component {
  render() {
    return (
      <div className="App">
        <div className="store">
            <h2 className="store-title">XP Store</h2>
            <div className="image-list">
                {[...Array(18)].map((_, i) => 
                    <div className="image-li" key={i}>
                        <img className="stock-img" src={soonImg} />
                    </div>
                )}
            </div>
        </div>
      </div>
    );
  }
}
