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
  return menu.categoria==categoria
})


 
  return (
    <>
      
      <div className="container mb-3">
        <h1 className="mb-3">Elige tu viaje culinario</h1>
        <div className="d-flex justify-content-center my-3">
        <CardMenu menus={menusF} />
        </div>
        
        <BotonPedido/>
      </div>
    </>
  );
};

export default Menu;