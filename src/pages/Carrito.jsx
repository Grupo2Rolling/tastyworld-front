import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CardFin from "../components/CardFin";
import { getProducto } from "../helpers/productos";


const Carrito = () => {
  let carrito = JSON.parse(localStorage.getItem("carrito"))||[];
  const [pedidos, setPedidos] = useState([]);
  const [eco, setEco] = useState(true);
  // const [productos, setProductos] = useState ([])
   
  
    // JSON.parse(localStorage.getItem("carrito"));
    
  
  useEffect(() => {
    let pedido=[]
    carrito.map((producto) => {
      getProducto(producto.idProducto).then((respuesta) => {
       pedido.push(respuesta.producto);
       setPedidos(pedido) 
      });
      
    });
    // console.log(pedido);
    
  
  }, [eco] );

  // useEffect(()=>{
  //   getProducto(pedidos).then((respuesta)=>{
  //     setProductos(respuesta.producto)
  //     console.log(productos)
  //   })
  // }, [])

  return (
   <Container>
      <h1>TU TASTY PEDIDO:</h1>
      <CardFin pedidos={pedidos} eco={eco} setEco={setEco} />
      </Container>
  );
};

export default Carrito;
