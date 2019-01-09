import React, { Component } from 'react';
import Sidebar from './sidebar.js';
import './styles/index.scss';
import './styles/sidebar.scss';
import logo from './images/thinkling-logo.png'

export default class HeaderSmall extends Component {
    render() {
        return(

            <div id="sidebar-header">
                <Sidebar />
                <div className="thinkling-header">
                    <p className="main-header-2 title-header" ><b>thinkling</b></p>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        )
    }
}