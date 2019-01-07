import React, { Component } from 'react';
import Sidebar from './sidebar.js';
import './styles/index.scss';
import './styles/sidebar.scss';
import logo from './images/racoon-cropped.png'

export default class HeaderSmall extends Component {
    render() {
        return(

            <div id="sidebar-header">
                <Sidebar />
                <div className="conundrum-header">
                    <p className="main-header-2"><b>CONUNDRUM</b></p>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        )
    }
}