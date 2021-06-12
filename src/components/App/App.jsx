import React from "react";
import "./App.css";

// ⬇ What we need to import
import { Route, HashRouter as Router } from "react-router-dom";

import AdminOnly from "../AdminONLY/AdminONLY";
import Comments from "../Comments/Comments";
import Feeling from "../Feeling/Feeling";
import Header from "../Header/Header";
import ReviewFeedBack from "../ReviewFeedBack/ReviewFeedBack";
import Success from "../Success/Success";
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
      <Route path="/success">
        <Success />
      </Route>

      <Route path="/admin">
        <AdminOnly />
      </Route>
    </Router>
  );
}

export default App;
