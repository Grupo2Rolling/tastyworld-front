import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import RouterDos from "./routes/RouterDos";
import ProtectedRoute from "./routes/ProtectedRoute";
import  {TastyNavbar}  from "./components/common/navbar/TastyNavbar";
import {TastyFooter} from "./components/common/footer/TastyFooter";

function App() {
  return (
    <Router>
       <TastyNavbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute path="/" component={RouterDos} />
      </Switch>
      <TastyFooter />
    </Router>
  );
}

export default App;