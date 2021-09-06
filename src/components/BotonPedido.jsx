import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import botonPed from "../assets/botonPed.svg"

const BotonPedido = ()=>{
const Pedidos= JSON.parse(localStorage.getItem("pedidos"))||null;
const [estadoBot, setEstadoBot] = useState(false)

useEffect(() => {
    if(Pedidos!= null){
        setEstadoBot(true)
    }
    
}, [Pedidos])
console.log(Pedidos);
console.log(estadoBot);
return (
<section>
        <div id="botonPedStick">
        <Link to='/confirmar'><img src={botonPed} alt="boton Confirmar" className={{estadoBot} ? "visible" : "invisible"}/></Link>
        </div>
      </section>
);

}
export default BotonPedido;

