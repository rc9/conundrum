import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from './routes/test1start.js';
import Video from './routes/video.js';
import Store from './routes/store.js';
import Signup from './routes/signup.js';

class App extends React.Component {

  render () {
    return (
      <Router>
        {/* <div style={{ display: "flex" }}>
          <div className="sidebar">
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
            </ul>
          </div> */}
          <Switch>
            <Route path="/shamwow" component={Video} />
            {/* <Route path="/store" component={Store} /> */}
            {/* <Route path="/welcome" component={Signup} /> */}
            <Route path="/herewego" component={Home} />
            <Route path="/" component={Signup} />
          </Switch>
        {/* </div> */}
      </Router>
    );
  }
}

export default App;
