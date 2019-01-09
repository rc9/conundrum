import React, { Component } from 'react';
import './styles/index.scss';

export default class Footer extends Component {
    render() {
        return(
            <div className="thinkling-footer">
                <hr />
                <p className="contact-us">Contact us: <a href="mailto:info@getthinkling.com">info@getthinkling.com</a></p>
                <p className="inc">2019 Thinkling, Inc. <b>&trade;</b></p>
            </div>
        )
    }
}