import React from "react";
import Login from "./Components/Login";
import UserCard from "./Components/UserCard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/user" component={UserCard} />
      </Switch>
    </Router>
  );
}

export default App;
