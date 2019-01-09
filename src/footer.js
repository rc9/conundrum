import React, { Component } from 'react';
import './styles/index.scss';

export default class Footer extends Component {
    render() {
        return(
            <div className="thinkling-footer">
                <hr />
                <p className="contact-us">Contact us: <a href="mailto:info@thinklingapp.com">info@thinklingapp.com</a></p>
                <p className="inc">2018 Thinkling Media, Inc. <b>&trade;</b></p>
            </div>
        )
    }
}