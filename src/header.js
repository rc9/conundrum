import React, { Component } from 'react';
import logo from './images/racoon.png';
import './styles/index.scss';

export default class Header extends Component {
    render() {
        return(
            <div className="conundrum-header">
                <p className="main-header"><b>CONUNDRUM</b></p>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}