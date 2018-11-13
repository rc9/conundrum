import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './routes/test1start.js';
import Video from './routes/video.js';
import Signup from './routes/signup.js';

class App extends React.Component {

  render () {
    return (
      <Router>
          <Switch>
            <Route path="/shamwow" component={Video} />
            <Route path="/herewego" component={Home} />
            <Route path="/" component={Signup} />
          </Switch>
        {/* </div> */}
      </Router>
    );
  }
}

export default App;
