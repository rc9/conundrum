import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/index.css';

export default class Header extends Component {
    render() {
        return(
            <div className="conundrum-header">
                logo and header
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}