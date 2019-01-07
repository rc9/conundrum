import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles/index.scss';
// import './styles/body.scss';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sidebar: "toggle-display-hide"};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (this.state.sidebar === "toggle-display-hide") {
            this.setState({sidebar: "toggle-display-show"})
        } else {
            this.setState({sidebar: "toggle-display-hide"})
        }
    }

    render() {
        return(
            <div id="sidebar" className="col-2 col-t-2" onClick={this.handleClick}>
                <div id="navigation">
                    <div id="top-bar">
                        <span className="float-left">☰</span>
                    </div>
                    <div id="side-bar" className={this.state.sidebar}>
                        <div className="nav-link"><NavLink to="/gettingstarted">Account</NavLink></div>
                        <div className="nav-link"><NavLink to="/games">Games</NavLink></div>
                        <div className="nav-link"><NavLink to="/leaderboard">Leaderboard</NavLink></div>
                        <div className="nav-link"><NavLink to="/invite">Invite</NavLink></div>
                        <div className="nav-link"><NavLink to="/logout">Logout</NavLink></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar;