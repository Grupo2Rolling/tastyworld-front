import React, { useState, useEffect } from "react";
import { getMenus } from "../helpers/menus";

import {Container} from 'react-bootstrap'
import  listaCategorias from "../helpers/listaCategorias"
import CardCategoria from "../components/CardCategoria";
import { Parallax } from 'react-parallax';
import Imagen2 from "../assets/imagen2.svg"


const Inicio = () => {
  // const [menus, setMenus] = useState([]);
  // const [categorias,setCategorias]=useState([])
  
  // useEffect(() => {
  //   getCategorias().then((respuesta) => {
  //     // console.log(respuesta);
  //     setCategorias(respuesta.categorias);
      
  //   });
  // }, []);

  // useEffect(() => {
  //   getMenus().then((respuesta) => {
  //     // console.log(respuesta);
  //     setMenus(respuesta.menus);
      
  //   });
  // }, []);

 
  return (
    <>

     <Parallax bgImage={Imagen2} strength={500}>
      <Container className="inicioBackground ">
        
          
        
            <CardCategoria lista={listaCategorias}/>
        
        
      </Container>
      </Parallax>

    </>
  );
};

export default Inicio;
