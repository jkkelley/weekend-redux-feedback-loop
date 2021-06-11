import React from "react";
import axios from "axios";
import "./App.css";

// ⬇ What we need to import
import { Route, HashRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Comments from "../Comments/Comments";
import Feeling from "../Feeling/Feeling";
import Support from "../Support/Support";
import Understanding from "../Understanding/Understanding";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>
      <Route path="/" exact>
        <Feeling />
      </Route>
      <Route path="/understanding">
        <Understanding />
      </Route>
      <Route path="/support">
        <Support />
      </Route>
      <Route path="/comments">
        <Comments />
      </Route>
    </Router>
  );
}

export default App;
