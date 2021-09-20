import React, { useState, useEffect } from "react";
import BotonPedido from "../components/BotonPedido";
import CardMenu from "../components/CardMenu";
import {Container} from 'react-bootstrap'
import { getProductos } from "../helpers/productos";

const Bebidas= () => {
  const [listaB, setListaB] = useState([]);
 
 
  useEffect(() => {
   

    getProductos().then((respuesta) => {
      let Bebid=respuesta.producto.filter((plato)=>{
          return  plato.tipo=="Bebida"
      })
      setListaB(Bebid);
      
     
    });
  }, []);


 
  return (
    <>
      <Container fluid className="inicioBackground continentBackground">
          <h2 className="tituloPag text-center  mb-3 ">Bebidas</h2>
          
          <CardMenu menus={listaB} />
        
        <BotonPedido/>
        </Container>
      
    </>
  );
};

export default Bebidas;