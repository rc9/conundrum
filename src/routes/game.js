import React, { Component } from 'react';
import HeaderSmall from '../header2.js';
import Footer from '../footer.js';
import '../styles/index.scss';
import '../styles/game.scss';

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 0,
            startPoints: 3320,
            points: 3320,
            questions: [
                "Let's get going! I have a ring but no hands. I used to be plugged into the wall but now I follow you everywhere. What am I?",
                <span>Don’t move your feet!" <a target="_blank" href="https://goo.gl/qatCyS">What time is it?</a></span>,
                "Flying out of the busiest airport in the world on 11/28 at this time -- where would I be going?",
                "“Hell on heels!” 2006 - what % did I get?",
                <span>No need to listen too long for <a target="_blank" href="https://youtu.be/PEGccV-NOm8?t=18">this prompt</a>... <br />(Sound on!)</span>,
                <span>Last one:<br />W<br />A<br />👅<br />O<br />Y<br />👄<br />I<br />O<br />A<br />🎢</span>

            ],
            answers: [
                ["phone", "cell", "cellphone"],
                ["2:38", "2:39", "2:40", "2:41"],
                ["raleigh"],
                ["76", "76%"],
                ["louboutin"],
                ["toxic"]
            ],
        };

        this.changeAnswer = this.changeAnswer.bind(this);
        this.handleSumbit = this.handleSumbit.bind(this);
    }

    changeAnswer(answer) {
        answer.preventDefault();
        this.setState({ans: answer.target.value});
    }

    handleSumbit(e) {
        e.preventDefault();
        const a = this.state.ans || "";
        let pos = this.state.position;
        if (this.state.answers[pos].includes(a.trim().toLowerCase())) {
            let p = (pos + 1) * 10 + 2 ** pos;
            alert("Correct!\nYou scored " + p + " 🌟!");
            this.setState({position: this.state.position + 1, points: this.state.points + p});
            document.getElementById("answer-form").reset();

        } else {
            alert("Hmmm...that doesn't look right. Try again!")
        }
    }
    
    renderGamePlay() {
        return(
            <div id="game-switch">
                <div className="welcome-header">
                    <div className="name-block">Welcome <b>jase</b>!</div>
                    <div className="point-block">{this.state.points.toLocaleString()} 🌟</div>
                </div>
                <div className="question-block">
                    <h3>Question {this.state.position + 1} of 6</h3>
                    <p id="question-text">{this.state.questions[this.state.position]}</p>
                </div>
                <div className="answer-block">
                    <form id="answer-form">
                        <input type="text" className="answer-field" name="answer-field" required placeholder="Answer" onChange={this.changeAnswer}/>
                        <input type="submit" className="answer-button" value="Submit" onClick={this.handleSumbit}/>
                    </form>
                </div>
            </div>
        )
    }

    renderGameFinish() {
        return(
            <div id="game-switch">
                <div className="game-finish">
                    <div className="name-block">Congratulations <b>jase</b>!</div>
                    <p>You completed the game! You added {this.state.points - this.state.startPoints} 🌟 to your score!
                    You're total is now <b>{this.state.points.toLocaleString()} 🌟</b>!
                    </p>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="App">
                <div id="wrapper">
                    <HeaderSmall />
                    <div className="game-container">
                        {this.state.position >= this.state.questions.length ? this.renderGameFinish() : this.renderGamePlay()}
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}