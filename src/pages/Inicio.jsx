import React, { useEffect } from "react";
import { useHistory } from "react-router";
import listaCategorias from "../helpers/listaCategorias";
import CardCategoria from "../components/CardCategoria";
import { Parallax } from "react-parallax";
import Imagen2 from "../assets/imagen2.svg";

const Inicio = () => {
  const user =
    JSON.parse(localStorage.getItem("auth")) &&
    JSON.parse(localStorage.getItem("auth")).usuario;
  const history = useHistory();

  useEffect(() => {
    const redireccion = () => user || history.push("/login");
    redireccion();
  });

  return (
    <>
      <Parallax
        className="inicioBackground min-height d-flex justify-content-center pt-5 mt-5"
        bgImage={Imagen2}
        strength={500}
      >
        <div>
          <h1 className="text-center tituloPag">BIENVENID@</h1>
          <CardCategoria lista={listaCategorias} />
        </div>
      </Parallax>
    </>
  );
};

export default Inicio;
