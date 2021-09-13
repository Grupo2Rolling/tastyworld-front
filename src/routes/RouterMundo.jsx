import React from "react";
import { Switch, Route } from "react-router-dom";

import Inicio from "../pages/Inicio";
import Admin from "../pages/Admin";
const RouterMundo = () => {
  return (
    <>
      <h1 className="mb-3">Elige tu viaje culinario</h1>
        <Container fluid>
     <CardContinente lista={listaContinentes}/>
        </Container>
      <Switch>
        <Route exact path="/ComidasMundo/:continente" render={({match})=>{
    return <Menu categoria={match.params.continente}/>}}/>
        <Route exact path="/admin" component={Admin} />
        <Route component={Error404} />
      </Switch>
    </>
  );
};

export default RouterMundo;
