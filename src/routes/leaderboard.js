import React, { Component } from 'react';
import Header from '../header.js';
import Footer from '../footer.js';
import '../styles/index.scss';
import '../styles/leaderboard.scss';

export default class Leaderboard extends Component {

  
  render() {
    let players = [
      {name: "shandy", score: 3022},
      {name: "rcircuit", score: 4879},
      {name: "jaimé", score: 5115},
      {name: "drew", score: 1120},
      {name: "jace", score: 3320}
    ];

    return (
      <div className="App">
        <Header />
        <div className="leaderboard-container">
          <table id="leaderboard-tbl">
            <thead>
              <tr>
                <th>User</th>
                <th>Point Total</th>
              </tr>
            </thead>
            <tbody>
              { players.sort((a, b) => b.score - a.score).map((p, i) => {
                return(
                  <tr id={"row-" + i}>
                    <td className="leader-name">{p.name}</td>
                    <td className="leader-score">{p.score}</td>
                  </tr>
                )
              }
              )}
            </tbody>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}
