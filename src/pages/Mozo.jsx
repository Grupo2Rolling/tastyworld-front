import React from "react";
import { useState, useEffect } from "react";

import { mesasGet, mesasTodasGet } from "../helpers/mesas";
import { Container, Row } from "react-bootstrap";
import TablaMesas from "../components/TablaMesas";
import TablaComandas from "../components/TablaMesasOcup";

const Mozo = () => {
  const [mesas, setMesas] = useState([]);
  const [mesasOcup, setMesasOcup] = useState([]);
  const [state, setState] = useState({ rol: "" });

  useEffect(() => {
    mesasGet().then((respuesta) => {
      setMesas(respuesta.mesa);
    });
  }, [mesas]);

  useEffect(() => {
    mesasTodasGet().then((respuesta) => {
      let todas = respuesta.mesa;
      let ocupadas = todas.filter((mesa) => {
        return mesa.estado === false;
      });
      setMesasOcup(ocupadas);
    });
  }, [mesas, mesasOcup]);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("auth"));
    setState(datos.usuario);
  }, [state.rol]);

  if (state.rol !== "WAITER_ROLE" && state.rol !== "ADMIN_ROLE") {
    return (
      <div className="alert alert-danger text-center" role="alert">
        🚫No autorizado🚫
      </div>
    );
  }
  return (
    <>
      <Container fluid className="login-bg py-4">
        <h1 className="text-white text-center">{state.nombre}</h1>
        <h1 className="iniciaSesion text-center my-3">Mesas Libres</h1>
        <Row className="text-center">
          <TablaMesas mesas={mesas} />
        </Row>
        <h1 className="iniciaSesion text-center my-3">Mesas Ocupadas</h1>
        <Row className="mb-5 text-center">
          <TablaComandas mesasOcup={mesasOcup} />
        </Row>
      </Container>
    </>
  );
};
export default Mozo;
