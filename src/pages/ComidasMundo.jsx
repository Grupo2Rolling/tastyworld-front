import React, { useState, useEffect, Link } from "react";
import { Container } from "react-bootstrap";
import { getProducto, getProductos } from "../helpers/productos";

import CardContinente from "../components/CardContinente";
import BotonPedido from "../components/BotonPedido";
import CardMenu from "../components/CardMenu";
import { useParams } from "react-router";
import { getContinentes } from "../helpers/continentes";

const ComidasMundo = () => {
  let { continente } = useParams();
  console.log(continente);
  const [listaM, setListaM] = useState([]);
  const [listaContinentes, setListaContinentes] = useState([]);
 const [menus, setMenus] =useState([])

 useEffect(()=>{ 
   getContinentes().then((respuesta) => {
    setListaContinentes(respuesta.continente);
    console.log(listaContinentes);
  });

  getProductos().then((respuesta) => {
    setListaM(respuesta.producto);
    setMenus(respuesta.producto);
    console.log(listaM);
  });

  


}, []);
 


  useEffect(() => {
    if (continente) {
      let lista = listaM.filter((menu) => {
        return menu.continente === continente;
      });
      setMenus(lista);
      console.log(listaM);
    }
  }, [continente]);

 

 

  return (
    <>
      <Container fluid className="inicioBackground">
        <h1 className="mb-3">CONTINENTES</h1>
        <div className="d-flex justify-content-center my-3">
          {/* <Categoria categorias={categorias}/> */}
        </div>
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
