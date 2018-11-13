import React, { Component } from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import '../styles/index.scss';
import '../styles/test1start.scss';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="instructions">
          <div>
            <p className="opening">
              <b>AND SO IT BEGINS...</b>
              <br />
              <br />
              <br />
              Welcome to the first ever Conundrum.
              <br />
              As a member of our exclusive testing group, thanks in advance for drumming up some fun and participating in this exciting adventure.
              <br />
              <br />
              Here are some tips and tricks to get started:
            </p>
            <ol className="list-indent">
              <li type="num">Remember that phone number that texted you this URL! In order to proceed to the next step you’ll need to reply to that number with the correct answer.</li>
              <br />
              <li type="num">Use whatever you want to figure out the answer. This means Google, Youtube, your friends, your mom, etc. are all fair game - get creative!</li>
              <div className="hidden"><i>2+2/2</i></div>
              <li type="num">Speed is your friend - the quicker you get to the end, the more points you’ll get which means future rewards and more fun once we get this fully launched. Don’t be the slow poke!</li>
              <br />
              <li type="num">Have fun and let us know what you think! After the end of this adventure, we’d love to get some feedback on what went well and what didn’t. Anything you can provide would be super helpful as we launch our second conundrum in the very near future.</li>
              <br />
              <li type="num">Did you get all of that? We’ll give you the first answer to kick things off… “YES”</li>
            </ol>
            <br />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
