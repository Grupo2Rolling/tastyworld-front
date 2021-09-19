
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TastyNavbar } from "./components/common/navbar/TastyNavbar";
import "bootstrap/dist/css/bootstrap.css";
import { TastyFooter } from "./components/common/footer/TastyFooter";
import Inicio from "./pages/Inicio";
import Menu from "./pages/Menu";
import Login from "./pages/Login";
import ComidasMundo from "./pages/ComidasMundo";
import FinPedido from "./pages/FinPedido";
import Administracion from "./components/Administracion";
import Mozo from "./pages/Mozo";
import Error from "./pages/Error404";
import Cocina from './pages/Cocina'
import Barra from './pages/Barra'
import Entregas from './pages/Entregas'




const App = () => {
  return (
    <Router>
      <TastyNavbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Inicio} />
        <Route exact path="/ComidasMundo" component={ComidasMundo} />
        <Route
          exact
          path="/ComidasMundo/:continente"
          component={ComidasMundo}
        />
        <Route exact path="/finalizarpedido" component={FinPedido} />
        <Route exact path="/Administracion" component={Administracion} />

        <Route exact path="/mozo" component={Mozo} />
        <Route exact path="/error" component={Error} />
        <Route exact path="/cocina" component={Cocina} />
        <Route exact path="/barra" component={Barra} />
        <Route exact path="/Entregas" component={Entregas} />
      </Switch>
      <TastyFooter />
    </Router>
  )
}

export default App
