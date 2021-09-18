
import React, { useState, useEffect } from "react";
import { getMenus } from "../helpers/menus";

import {Container} from 'react-bootstrap'
import  listaCategorias from "../helpers/listaCategorias"
import CardCategoria from "../components/CardCategoria";
import { Parallax } from 'react-parallax';
import Imagen2 from "../assets/imagen2.svg";



const Inicio = () => {
  
 
  return (
    <>

     <Parallax className='inicioBackground min-height' bgImage={Imagen2} strength={500}>
     
        
          
        <h1 className="text-center tituloPag">BIENVENIDO</h1>
            <CardCategoria lista={listaCategorias}/>
        
        
     
      </Parallax> 

    </>
  );
};

export default Inicio;
