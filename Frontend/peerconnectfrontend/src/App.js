import React from "react";
import Login from "./Components/Login";
import UserCard from "./Components/UserCard";
import UserProfile from "./Components/UserProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/user" component={UserCard} />
        <Route path="/profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
