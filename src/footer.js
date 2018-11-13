import React, { Component } from 'react';
import './styles/index.scss';

export default class Footer extends Component {
    render() {
        return(
            <div className="conundrum-footer">
                <hr />
                <p className="contact-us">Contact us: <a href="mailto:info@conundrumapp.com">info@conundrumapp.com</a></p>
                <p className="inc">2018 Conundrum Media, Inc</p>
            </div>
        )
    }
}