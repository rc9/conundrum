import React, { Component } from 'react';
import Sidebar from './sidebar.js';
import './styles/index.scss';
import './styles/sidebar.scss';

export default class HeaderSmall extends Component {
    render() {
        return(

            <div id="sidebar-header">
                <Sidebar />
                <div className="conundrum-header">
                    <p className="main-header-2"><b>CONUNDRUM</b></p>
                </div>
            </div>
        )
    }
}