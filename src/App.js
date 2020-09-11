import React from "react";
import Header from "./components/Header/header.component";
import Landing from "./components/LandingPage/Landing";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import "../src/App.css";

function App() {
  return (
    <div className="main-app">
      <Switch>
        <Route exact path="/">
          <Header />
          <Landing />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </div>
  );
}

export default App;
