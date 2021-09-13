import React, { useState, useEffect,Link } from "react";
import{Container} from 'react-bootstrap';
import { getMenus} from "../helpers/menus";
import {getCategorias } from "../helpers/categorias"
import  listaContinentes from "../helpers/listaContinentes"
import CardContinente from "../components/CardContinente";
import  listaMenus from "../helpers/listamenus";
import BotonPedido from "../components/BotonPedido";
import CardMenu from "../components/CardMenu";

const ComidasMundo = () => {
    
  const [menus, setMenus] = useState([listaMenus]);
  const [categorias,setCategorias]=useState([])
  

//   useEffect(() => {
//     getMenus().then((respuesta) => {
//       // console.log(respuesta);
//       setMenus(respuesta.menus);
      
//     });
//   }, []);
//   const filtrarMenus = (listaMenus,categoria)=>{
//   if (categoria){
//    menusF=listaMenus.filter(function(menu){
//     return menu.continente==categoria
//   })
//   return menusF
  
// }}
// filtrarMenus(listaMenus,categoria);
const handleClick=(e)=>{
    console.log(e.target);
}
 
  return (
    <>
      
      
        <h1 className="mb-3">Elige tu viaje culinario</h1>
        <div className="d-flex justify-content-center my-3">
         {/* <Categoria categorias={categorias}/> */}
        </div>
        <Container fluid>
                                 
                          <CardContinente lista={listaContinentes} menus={menus} setMenus={setMenus}/>
                      
                  
              
            
        </Container>
        
        <Container fluid>
         
            
        <CardMenu menus={menusF} />
        </Container>
        <BotonPedido/>
      

    </>
  );
};

export default ComidasMundo;