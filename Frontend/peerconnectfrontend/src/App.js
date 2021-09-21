import React from "react";
import Login from "./Components/Login";
import UserCard from "./Components/UserCard";
import UserProfile from "./Components/UserProfile";
import Navbar from "./Components/Navbar";
import UserSignup from "./Components/UserSignup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/user" component={UserCard} />
        <Route path="/profile" component={UserProfile} />
        <Route path="/signup" component={UserSignup} />
      </Switch>
    </Router>
  );
}

export default App;
