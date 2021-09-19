import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import botonPed from "../assets/botonPed.svg";

const BotonPedido = () => {
  
  

  
  // console.log(comanda);
  // console.log(estadoBot);
  return (
    <section>
      <div id="botonPedStick">
        <Link to="/carrito">
          <img
            src={botonPed}
            alt="boton Confirmar"
            className="btnCarrito"
          />
        </Link>
      </div>
    </section>
  );
};
export default BotonPedido;
