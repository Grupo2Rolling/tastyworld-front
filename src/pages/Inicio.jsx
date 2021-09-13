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
      <Container className="inicioBackground">
        
          <h2 className="mb-3">Aquí estaría el Navbar... Si tuviera uno!!</h2>
          <div className="d-flex justify-content-center my-3">
           {/* <Categoria categorias={categorias}/> */}
          </div>
        
            <CardCategoria lista={listaCategorias}/>
        
        
      </Container>
      </Parallax>
    </>
  );
};

export default Inicio;
