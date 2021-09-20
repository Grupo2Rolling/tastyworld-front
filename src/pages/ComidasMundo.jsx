import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import {getProductos } from "../helpers/productos";
import CardContinente from "../components/CardContinente";
import BotonPedido from "../components/BotonPedido";
import CardMenu from "../components/CardMenu";
import { useParams, useHistory } from "react-router";
import { getContinentes } from "../helpers/continentes";

const ComidasMundo = () => {
  let { continente } = useParams();

  const [listaM, setListaM] = useState([]);
  const [listaContinentes, setListaContinentes] = useState([]);
  const [menus, setMenus] = useState([]);
  const token = JSON.parse(localStorage.getItem("auth")) && JSON.parse(localStorage.getItem("auth")).token
  useEffect(() => {
    getContinentes(token).then((respuesta) => {
      setListaContinentes(respuesta.continente);
      
    });

    getProductos(token).then((respuesta) => {
      let platos=respuesta.producto.filter((plato)=>{
          return  plato.tipo=="Plato"
      })
      setListaM(platos);
      setMenus(platos);
     
    });
  }, []);

  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('auth')) && JSON.parse(localStorage.getItem('auth')).usuario
  useEffect(() => {
    const redireccion = () => user || history.push('/login')
    redireccion()
  }, []);
 
  useEffect(() => {
    if (continente) {
      let lista = listaM && listaM.filter((menu) => {
        return menu.continente === continente;
      });
      setMenus(lista);
      console.log(menus);
    }
  }, [continente]);

  return (
    <>
      <Container fluid className="inicioBackground min-height continentBackground">
        <h2 className="mb-3 tituloPag text-center">CONTINENTES</h2>
       
        <Container fluid>
          <CardContinente continentes={listaContinentes} />
        </Container>

        <Container fluid>
          <h2 className="tituloPag text-center mt-4 mb-3 ">Nuestros Platos</h2>
          <CardMenu menus={menus} />
        </Container>
        <BotonPedido />
      </Container>
    </>
  );
};

export default ComidasMundo;
