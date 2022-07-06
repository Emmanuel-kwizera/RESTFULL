import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Vehicles from "./views/Vehicles";
import History from "./views/History";
import NotFound from "./views/NotFound";
import Owner from "./views/Owners";
import Home from "./views/Home";
import './App.css'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/vehicles">
          <Vehicles />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/owners">
          <Owner />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
