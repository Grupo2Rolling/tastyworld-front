import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {getProductos } from "../helpers/productos";
import CardContinente from "../components/CardContinente";
import BotonPedido from "../components/BotonPedido";
import CardMenu from "../components/CardMenu";
import { useParams } from "react-router";
import { getContinentes } from "../helpers/continentes";

const ComidasMundo = () => {
  let { continente } = useParams();

  const [listaM, setListaM] = useState([]);
  const [listaContinentes, setListaContinentes] = useState([]);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getContinentes().then((respuesta) => {
      setListaContinentes(respuesta.continente);
      
    });

    getProductos().then((respuesta) => {
      setListaM(respuesta.producto);
      setMenus(respuesta.producto);
     
    });
  }, []);

  useEffect(() => {
    if (continente) {
      let lista = listaM.filter((menu) => {
        return menu.continente === continente;
      });
      setMenus(lista);
      console.log(menus);
    }
  }, [continente]);

  return (
    <>
      <Container fluid className="inicioBackground">
        <h2 className="mb-3 tituloPag text-center">CONTINENTES</h2>
       
        <Container fluid>
          <CardContinente continentes={listaContinentes} />
        </Container>

        <Container fluid>
          <CardMenu menus={menus} />
        </Container>
        <BotonPedido />
      </Container>
    </>
  );
};

export default ComidasMundo;
