import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import botonPed from "../assets/botonPed.svg";

const BotonPedido = () => {
  const comanda = JSON.parse(localStorage.getItem("comanda")) || [];
  const [estadoBot, setEstadoBot] = useState(false);

  useEffect(() => {
    if (comanda != []) {
      setEstadoBot(true);
    }
  }, [comanda]);
  // console.log(comanda);
  // console.log(estadoBot);
  return (
    <section>
      <div id="botonPedStick">
        <Link to="/confirmar">
          <img
            src={botonPed}
            alt="boton Confirmar"
            className={{ estadoBot } ? "visible" : "invisible"}
          />
        </Link>
      </div>
    </section>
  );
};
export default BotonPedido;
