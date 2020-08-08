import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Teams from "./components/Teams";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Form from "./components/forms/form";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/teams" render={() => <Teams />} />
          <Route exact path="/form" render={() => <Form />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
