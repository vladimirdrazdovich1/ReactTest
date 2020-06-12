import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "routes/Login";
import RegisterPage from "routes/Register";
import ProfilePage from "routes/Profile";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
