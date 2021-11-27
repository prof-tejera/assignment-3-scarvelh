import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import DocumentationView from "./views/DocumentationView";
import AddView from "./views/AddView";
import { StopWatchDisplayTypes } from "./views/TimersView_New";

const Container = styled.div`
  background: #f0f6fb;
  height: 100vh;
  overflow: auto;
`;

function App() {
  return (
    <Container>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Timers</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
            <li>
              <Link to="/add">Add/Configuration</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/add">
            <AddView />
          </Route>
          <Route path="/docs">
            <DocumentationView />
          </Route>
          <Route path="/">
            <StopWatchDisplayTypes />
          </Route>

        </Switch>
      </Router>
    </Container>
  );
}

export default App;
