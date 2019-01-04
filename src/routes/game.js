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
            questions: [
                "Let's get going! I have a ring but no hands. I used to be plugged into the wall but now I follow you everywhere. What am I?",
                "Don’t move your feet! What time is it?: https://goo.gl/qatCyS",
                "Flying tomorrow (11/28) out of the busiest airport in the world at that time, where would I be going?",
                "“Hell on heels!” 2006 - what % did I get?"
            ],
            answers: [
                ["phone", "cell"],
                ["2:38", "2:39", "2:40", "2:41"],
                ["Raleigh"],
                ["75", "75%"]
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
        const a = this.state.ans;
        if (this.state.answers[this.state.position].includes(a)) {
            this.setState({position: this.state.position + 1});
            document.getElementById("answer-form").reset();

        } else {
            alert("Hmmm...that doesn't look right. Try again!")
        }
    }

    render() {
        return (
            <div className="App">
            <div id="wrapper">
                <HeaderSmall />

                <div className="game-container">
                    <div className="welcome-header">
                        <div className="name-block">Welcome <b>PLAYER1!</b></div>
                        <div className="point-block">4,230 XP</div>
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
            </div>

            <Footer />
            </div>
        );
    }
}