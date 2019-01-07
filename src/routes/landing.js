import React, { Component } from 'react';
import HeaderSmall from '../header2.js';
import Footer from '../footer.js';
import '../styles/index.scss';
import '../styles/welcome.scss'

export default class Landing extends Component {
  render() {
    return (
      <div className="App">
        <HeaderSmall />
        <div className="welcome-page">
          <p className="welcome-message">
            Welcome to Conundrum, the first ever digital adventure app to test your thinking and solve some crazy fun problems.
            <br />
            We’re currently in the process of drumming up some fun and should be launched super soon.
            <br />
            In the meantime, subscribe below to stay up to date on our launch!
          </p>
          <div className="signup">
              <iframe title="google-signup" src="https://docs.google.com/forms/d/e/1FAIpQLSeN94plZLyRT7uLfwqYbW1LY-D_pvccizqzrqHFcgSZl3d1QQ/viewform?embedded=true" width="100%" height="850" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}