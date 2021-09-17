

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import RouterDos from "./routes/RouterDos";
import ProtectedRoute from "./routes/ProtectedRoute";
import RouterTres from './routes/RouterTres'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={RouterDos} />
        <ProtectedRoute exact path="/staff/:funcion" component={RouterTres}/>
      </Switch>
    </Router>
  );
}

export default App;