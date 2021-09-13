
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TastyNavbar } from './components/common/navbar/TastyNavbar'
import "bootstrap/dist/css/bootstrap.css"
import { TastyFooter } from './components/common/footer/TastyFooter'
import Inicio from "./pages/Inicio";
import Menu from "./pages/Menu";
import ComidasMundo from "./pages/ComidasMundo";
const App = () => {
    return (
        <Router>
            <TastyNavbar/>
            <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/ComidasMundo" component={ComidasMundo}/>
        {/* <Route exact path="/:categoria" render={({match})=>{
          return <Menu categoria={match.params.categoria}/>}}/> */}
        {/* <Route exact path="/:continente" render={({match})=>{
          return <Menu categoria={match.params.continente}/>}}/>
         */}
      </Switch>
            <TastyFooter />
        </Router>
    )
}

export default App


