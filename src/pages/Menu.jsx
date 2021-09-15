import React, { useState, useEffect } from "react";
import { getMenusCont } from "../helpers/menus";

import  listaMenus from "../helpers/listamenus";
import BotonPedido from "../components/BotonPedido";
import CardMenu from "../components/CardMenu";


const Menu = ({categoria}) => {

  const [menus, setMenus] = useState([]);
  
 
  // useEffect(() => {
  //   getMenusCont().then((respuesta) => {
  //     // console.log(respuesta);
  //     setMenus(respuesta.menus);
      
  //   });
  // }, []);
 const menusF=listaMenus.filter(function(menu){

  return menu.continente===categoria

})


 
  return (
    <>
      
      <div className="container mb-3">
        <h2 className="mb-3">Menús</h2>
        <h3>Continentes</h3>
        <div className="d-flex justify-content-center my-3">
        <CardMenu menus={menusF} />
        </div>
        
        <BotonPedido/>

      </div>
    </>
  );
};

export default Menu;