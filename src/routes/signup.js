import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/index.css';
import '../styles/welcome.scss'

export default class Signup extends Component {
  render() {
    return (
      <div className="App">
        <div className="conundrum-header">
          logo and header
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="welcome-page">
          <div className="welcome-message">
            Welcome to Conundrum, the first ever digital adventure app to test your thinking and solve some crazy fun problems.
            <br />
            We’re currently in the process of drumming up some fun and should be launched super soon.
            <br />
            In the meantime, subscribe below to stay up to date on our launch!
          </div>
          <div className="signup">
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeN94plZLyRT7uLfwqYbW1LY-D_pvccizqzrqHFcgSZl3d1QQ/viewform?embedded=true" width="100%" height="770" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
          </div>
        </div>
      </div>
    );
  }
}
