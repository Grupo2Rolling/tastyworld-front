import React from "react";
import { useState, useEffect } from "react";

import { mesasGet, mesasTodasGet } from "../helpers/mesas";
import { Container, Row } from "react-bootstrap";
import TablaMesas from "../components/TablaMesas";
import TablaComandas from "../components/TablaComandas";
// import TableCategorias from "../components/TableCategorias";
// import TableProductos from "../components/TableProductos";
// import TableUsuario from "../components/TableUsuario";

// const [state, setState] = useState({ rol: "" });
// useEffect(() => {
//   const datos = JSON.parse(localStorage.getItem("auth"));
//   setState(datos.usuario);
// }, [state.rol]);

const Mozo = () => {
  const [mesas, setMesas] = useState([]);
  const [mesasOcup, setMesasOcup] = useState([]);

  useEffect(() => {
    mesasGet().then((respuesta) => {
      setMesas(respuesta.mesa);
    });
  }, []);
  useEffect(() => {
    mesasTodasGet().then((respuesta) => {
      let todas = respuesta.mesa;
      let ocupadas = todas.filter((mesa) => {
        return mesa.estado === false;
      });
      setMesasOcup(ocupadas);
    });
  }, []);

  return (
    <>
      <Container fluid className="login-bg py-4">
        <h1 className="text-white">Mozo</h1>
        <Row className="my-5">
          <TablaMesas mesas={mesas} />
        </Row>
        <Row className="mb-5">
          <TablaComandas mesasOcup={mesasOcup} />
        </Row>
      </Container>
    </>
  );
};

//   if (state.rol !== "WAITER_ROL") {
//     return (
//       <div className="alert alert-danger text-center" role="alert">
//         🚫No autorizado🚫
//       </div>
//     );
//   }

export default Mozo;
