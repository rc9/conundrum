import React, { Component } from 'react';
import Sidebar from './sidebar.js';
import './styles/index.scss';
import './styles/sidebar.scss';

export default class HeaderSmall extends Component {
    render() {
        return(

            <div id="sidebar-header">
                <Sidebar />
                <div className="thinkling-header">
                    <p className="main-header-2 title-header"><b>thinkling</b></p>
                </div>
            </div>
        )
    }
}