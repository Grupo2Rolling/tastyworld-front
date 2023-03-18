import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { getComandasCocina } from "../helpers/comandas";
import CardCocina from "../components/CardCocina";
import { Container } from "react-bootstrap";

const Cocina = () => {
  const [comandas, setComandas] = useState([]);
  const history = useHistory();
  const user =
    JSON.parse(localStorage.getItem("auth")) &&
    JSON.parse(localStorage.getItem("auth")).usuario;

  useEffect(() => {
    const redireccion = () =>
      (user && (user.rol === "CHEF_ROLE" || user.rol === "ADMIN_ROLE")) ||
      history.push("/login");
    redireccion();
  });

  useEffect(() => {
    getComandasCocina().then((respuesta) => {
      console.log({ respuesta });
      setComandas(respuesta.comanda);
    });
    const intervalo = setInterval(() => {
      getComandasCocina().then((respuesta) => {
        setComandas(respuesta.comanda);
      });
    }, 30000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <Container fluid className="mt-2 min-height">
        <CardCocina comandas={comandas} />
      </Container>
    </>
  );
};

export default Cocina;
