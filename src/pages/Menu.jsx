import React, { useState, useEffect } from "react";
import { getMenusCont } from "../helpers/menus";


import CardMenu from "../components/CardMenu";


const Menu = ({continente}) => {
  const [menus, setMenus] = useState([]);
  
 
  useEffect(() => {
    getMenusCont().then((respuesta) => {
      // console.log(respuesta);
      setMenus(respuesta.menus);
      
    });
  }, []);

 
  return (
    <>
      
      <div className="container mb-3">
        <h1 className="mb-3">Elige tu viaje culinario</h1>
        <div className="d-flex justify-content-center my-3">
         
        </div>
        <CardMenu menus={menus} />
      </div>
    </>
  );
};

export default Menu;