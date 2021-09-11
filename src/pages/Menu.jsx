import React, { useState, useEffect } from "react";
import { getMenusCont } from "../helpers/menus";
import  listaMenus from "../helpers/listamenus"

import CardMenu from "../components/CardMenu";


const Menu = ({continente}) => {
  const [menus, setMenus] = useState([]);
  
 
  // useEffect(() => {
  //   getMenusCont().then((respuesta) => {
  //     // console.log(respuesta);
  //     setMenus(respuesta.menus);
      
  //   });
  // }, []);
 const menusF=listaMenus.filter(function(menu){
  return menu.continente==continente
})


 
  return (
    <>
      
      <div className="container mb-3">
        <h1 className="mb-3">Elige tu viaje culinario</h1>
        <div className="d-flex justify-content-center my-3">
         
        </div>
        <CardMenu menus={menusF} />
      </div>
    </>
  );
};

export default Menu;