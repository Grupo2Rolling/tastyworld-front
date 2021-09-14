// import React, { useState, useEffect } from "react";
// import { getMenus } from "../helpers/menus";
// import  listaMenus from "../helpers/listamenus"
// import CardMenu from "../components/CardMenu";
// import Categoria from "../components/Categoria";
import  listaCategorias from "../helpers/listaCategorias"
import CardCategoria from "../components/CardCategoria";


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
      
      <div className="container mb-3">
        <h1 className="mb-3">Elige tu viaje culinario</h1>
        <div className="d-flex justify-content-center my-3">
         {/* <Categoria categorias={categorias}/> */}
        </div>
        
          <CardCategoria listaCategorias={listaCategorias}/>

          
        
      </div>
    </>
  );
};

export default Inicio;
