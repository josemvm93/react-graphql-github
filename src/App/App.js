import React from 'react';
import './App.css';
import * as routes from '../constants/routes';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

function App() {

  return (
      <Router>
          <Switch>
              <Route path={routes.HOME}>
                  <h2>HOME</h2>
              </Route>
              <Route path={routes.USER}>
                  <h2>USER</h2>
              </Route>
              <Route path="/">
                  <h2>HOME</h2>
              </Route>
          </Switch>
        <div>
        </div>
      </Router>
  );
}

export default App;
