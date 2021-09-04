import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Menu from "./pages/Menu";

const App = () => {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/menu/:continente" component={Menu} />
        
      </Switch>
    </Router>
  );
};

export default App;
