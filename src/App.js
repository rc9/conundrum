import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/home.js';
import Video from './routes/video.js';
import Store from './routes/store.js';
import Signup from './routes/signup.js';

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path="/landing" component={Video} />
          <Route path="/store" component={Store} />
          <Route path="/signup-form" component={Signup} />
          <Route path="/" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
