import { Link } from "react-router-dom";
import botonPed from "../assets/botonPedido.svg";

const BotonPedido = () => {
  
  return (
    <section>
      <div id="botonPedStick">
        <Link to="/carrito">
          <img
            src={botonPed}
            alt="boton Confirmar"
          />
        </Link>
      </div>
    </section>
  );
};
export default BotonPedido;
