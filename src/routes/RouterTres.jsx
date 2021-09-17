import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import ComidasMundo from '../pages/ComidasMundo'


function RouterTres() {
  return (
    <Router>
      <Switch>
        
        <Route exact path="/staff/:cocina" component={ComidasMundo}/>
      </Switch>
    </Router>
  );
}

export default RouterTres;