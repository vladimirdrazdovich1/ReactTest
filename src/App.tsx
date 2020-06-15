import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "routes/Login";
import ProfilePage from "routes/Profile";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import theme from "utils/theme";

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
