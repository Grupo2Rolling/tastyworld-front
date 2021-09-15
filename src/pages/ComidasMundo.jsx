import React, { useState, useEffect,Link } from "react";
import{Container} from 'react-bootstrap';
import {productosGet} from "../helpers/menus";

import  listaContinentes from "../helpers/listaContinentes"
import CardContinente from "../components/CardContinente";
import  listaMenus from "../helpers/listamenus";
import BotonPedido from "../components/BotonPedido";
import CardMenu from "../components/CardMenu";
import { useParams } from "react-router";


const ComidasMundo = () => {
    let continente= useParams().toString();
   console.log(continente);
   let listaM=[];
//   productosGet().then((respuesta)=>{
//    const listaMenus= respuesta.productos
//    console.log(listaMenus);
//   })
  const [menus, setMenus] = useState(listaMenus
    );
 
    
 useEffect(()=>{
   console.log(listaMenus);
  if (continente =! ""){
    listaM=listaMenus.filter((menu)=>{
     return menu.continente==continente})
     setMenus(listaM) 
    console.log(menus);
 }},[continente]);

// const filtrarMenus =()=>{
//  if (continente){
//     let listaM=listaMenus.filter((menu)=>{
//      return menu.continente===continente})
//      setMenus({
//          lista: listaM,
//         loading: false }) 
//     console.log(menus.lista);
    
//     }

//   const filtrarMenus=()=>{
//      if (continente){
//       getMenusCont(continente).then((respuesta) => {
//         setMenus({
//           lista: respuesta.productos,
//           loading: false,
//         });
//       });}
   
     
//    }



 
  return (
    <>
      
      <Container fluid className="inicioBackground">
        <h1 className="mb-3">CONTINENTES</h1>
        <div className="d-flex justify-content-center my-3">
         {/* <Categoria categorias={categorias}/> */}
        </div>
        <Container fluid >
                                 
                          <CardContinente lista={listaContinentes} menus={menus} setMenus={setMenus}/>
              
        </Container>
        
        <Container fluid>
         
            
        <CardMenu menus={menus} />
        </Container>
        <BotonPedido/>
      
        </Container>
    </>
  );
};



export default ComidasMundo;