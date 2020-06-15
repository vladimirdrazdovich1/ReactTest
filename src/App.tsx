import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import AuthPage from "routes/Auth";
import ProfilePage from "routes/Profile";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";

import theme from "utils/theme";

const App: React.FC = () => {
  return (
    <MuiThemeProvider theme={createMuiTheme(theme)}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/auth" />} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
