import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { mesasGet, mesasTodasGet } from "../helpers/mesas";
import { getComandasEntregas } from "../helpers/comandas";
import { Container, Row } from "react-bootstrap";
import TablaMesas from "../components/TablaMesas";
import TablaComandas from "../components/TablaMesasOcup";
import TablaPedidos from "../components/TablaPedidos";

const Mozo = () => {
  const [mesas, setMesas] = useState([]);
  const [mesasOcup, setMesasOcup] = useState([]);
  //pedidos
  const [pedidos, setPedidos] = useState([]);
  const [eco, setEco] = useState(false);
  const [state, setState] = useState({ rol: "" });

  const history = useHistory();
  const user =
    JSON.parse(localStorage.getItem("auth")) &&
    JSON.parse(localStorage.getItem("auth")).usuario;

  useEffect(() => {
    const redireccion = () =>
      (user && (user.rol === "WAITER_ROLE" || user.rol === "ADMIN_ROLE")) ||
      history.push("/login");
    redireccion();
  }, []);

  // useEffect(() => {
  //   const datos = JSON.parse(localStorage.getItem("auth"));
  //   setState(datos.usuario);
  // }, [state.rol]);

  useEffect(() => {
    mesasGet().then((respuesta) => {
      setMesas(respuesta.mesa);
    });
  }, [mesas]);

  useEffect(() => {
    mesasTodasGet().then((respuesta) => {
      let todas = respuesta.mesa;
      let ocupadas =
        todas &&
        todas.filter((mesa) => {
          return mesa.estado === false;
        });
      setMesasOcup(ocupadas);
    });
  }, [mesasOcup]);

  useEffect(() => {
    getComandasEntregas().then((respuesta) => {
      setPedidos(respuesta.comanda);
    });
  }, [eco]);

  // if (state.rol !== "WAITER_ROLE" && state.rol !== "ADMIN_ROLE") {
  //   return (
  //     <div className="alert alert-danger text-center py-5 my-5" role="alert">
  //       🚫Ingreso no autorizado🚫
  //     </div>
  //   );
  // }
  return (
    <>
      <Container fluid className="login-bg py-4 mt-5">
        <h1 className="text-white text-center">{state.nombre}</h1>
        <h1 className="iniciaSesion text-center my-3">Mesas Libres</h1>
        <Row className="text-center">
          <TablaMesas mesas={mesas} />
        </Row>
        <h1 className="iniciaSesion text-center my-3">Mesas Ocupadas</h1>
        <Row className="mb-5 text-center">
          <TablaComandas mesasOcup={mesasOcup} />
        </Row>
        <h1 className="iniciaSesion text-center my-3">Pedidos</h1>
        <Row className="mb-5 text-center">
          <TablaPedidos pedidos={pedidos} eco={eco} setEco={setEco} />
        </Row>
      </Container>
    </>
  );
};
export default Mozo;
