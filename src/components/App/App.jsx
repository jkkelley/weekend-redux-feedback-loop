import React from "react";
import axios from "axios";
import "./App.css";

// ⬇ What we need to import
import { Route, HashRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>Don't forget it!</h4>
          </header>
        </div>
      </Route>
    </Router>
  );
}

export default App;
