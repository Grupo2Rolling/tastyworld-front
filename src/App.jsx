import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Menu from "./pages/Menu";
import FinPedido from "./pages/FinPedido";

const App = () => {
    return (
        <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Inicio} />
        <Route exact path="/menu/:continente" component={Menu} />
        <Route exact path="/finalizarpedido" component={FinPedido} />

        
      </Switch>
    </Router>
    )
}
   
        
 export default App;
