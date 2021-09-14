import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TastyNavbar } from './components/common/navbar/TastyNavbar'
import "bootstrap/dist/css/bootstrap.css"
import { TastyFooter } from './components/common/footer/TastyFooter'
import Login from "./pages/Login";
import Inicio from "./pages/Inicio";
import Menu from "./pages/Menu";
import FinPedido from "./pages/FinPedido";


const App = () => {
    return (
        <Router>
          <TastyNavbar/>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Inicio} />
        <Route exact path="/menu/:continente" component={Menu} />
        <Route exact path="/finalizarpedido" component={FinPedido} />

        
      </Switch>
      <TastyFooter />
    </Router>

     )}
   
        
 export default App;
