import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import Cocina from './pages/Cocina'
import FinPedido from './pages/FinPedido'
import { TastyNavbar } from './components/common/navbar/TastyNavbar'
import 'bootstrap/dist/css/bootstrap.css'
import { TastyFooter } from './components/common/footer/TastyFooter'

const App = () => {
  return (
    <Router>
        <TastyNavbar />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/menu/:continente" component={Menu} />
        <Route exact path="/cocina" component={Cocina} />
        <Route exact path="/finalizarpedido" component={FinPedido} />
      </Switch>
      <TastyFooter />
    </Router>
  )
}

export default App
