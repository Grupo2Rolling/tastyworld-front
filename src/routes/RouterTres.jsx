import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Inicio from '../pages/Inicio'
import Login from '../pages/Login'
import Cocina from '../pages/Cocina'
import Barra from '../pages/Barra'

const RouterTres = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Inicio} />
        <Route exact path="/staff/cocina" component={Cocina} />
        <Route exact path="/staff/barra" component={Cocina} />
      </Switch>
    </Router>
  )
}

export default RouterTres;
