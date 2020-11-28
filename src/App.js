import React from "react";
import Home from "./components/Home.jsx";
import Info from "./components/Info.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css"

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/search/:playerId" children={<Info />} />
        </Switch>
      </Router>
    </div>
  );
}
