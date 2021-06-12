import React from "react";
import axios from "axios";
import "./App.css";

// ⬇ What we need to import
import { Route, HashRouter as Router } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Comments from "../Comments/Comments";
import Feeling from "../Feeling/Feeling";
import Header from "../Header/Header";
import ReviewFeedBack from "../ReviewFeedBack/ReviewFeedBack";
import Support from "../Support/Support";
import Understanding from "../Understanding/Understanding";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Header />
        <Feeling />
      </Route>
      <Route path="/understanding">
        <Header />
        <Understanding />
      </Route>
      <Route path="/support">
        <Header />
        <Support />
      </Route>
      <Route path="/comments">
        <Header />
        <Comments />
      </Route>
      <Route path="/review">
        <ReviewFeedBack />
      </Route>
    </Router>
  );
}

export default App;
