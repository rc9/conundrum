import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/start.js';
import Signup from './routes/signup.js';
import Christmas from './routes/christmas.js';

class App extends React.Component {

  render () {
    return (
      <Router>
          <Switch>
            <Route path="/gettingstarted" component={Home} />
            <Route path="/hohoho" component={Christmas} />
            <Route path="/" component={Signup} />
          </Switch>
      </Router>
    );
  }
}

export default App;
