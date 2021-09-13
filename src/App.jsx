import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComidasMundo from "./pages/ComidasMundo";
import Inicio from "./pages/Inicio";
import Menu from "./pages/Menu";


const App = () => {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/ComidasMundo" component={ComidasMundo}/>
        {/* <Route exact path="/:categoria" render={({match})=>{
          return <Menu categoria={match.params.categoria}/>}}/> */}
        {/* <Route exact path="/:continente" render={({match})=>{
          return <Menu categoria={match.params.continente}/>}}/>
         */}
      </Switch>
    </Router>
  );
};


export default App;
