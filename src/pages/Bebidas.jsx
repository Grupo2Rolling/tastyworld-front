import React, { useState, useEffect } from "react";
import BotonPedido from "../components/BotonPedido";
import CardMenu from "../components/CardMenu";


const Bebidas= () => {

  
 


 
  return (
    <>
      
      <div className="container mb-3">
        <h2 className="mb-3">Menús</h2>
        <h3>Continentes</h3>
        <div className="d-flex justify-content-center my-3">
        {/* <CardMenu menus={menusF} /> */}
        </div>
        
        <BotonPedido/>

      </div>
    </>
  );
};

export default Menu;