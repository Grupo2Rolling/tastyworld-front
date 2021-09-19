import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CardFin from "../components/CardFin";
import { getProducto } from "../helpers/productos";


const Carrito = () => {
  const [pedidos, setPedidos] = useState([]);
  // const [productos, setProductos] = useState ([])
   const [actualizar, setActualizar] = useState(true)

    const [carrito, setCarrito] = useState([
      "61427df9178b6ad91f7ad4b7",
      "6143dafe7c6042373d8a1e7d",
      "614533d6d1cbc58471a648ec",
    ])
    // JSON.parse(localStorage.getItem("carrito"));
    let pedido = []
  
  useEffect(() => {
        
    carrito.map((producto) => {
      getProducto(producto).then((respuesta) => {
         pedido.push(respuesta.producto);
      });
    
    });
    // console.log(pedido);
    setPedidos(pedido) 
  
  }, [actualizar] );

  // useEffect(()=>{
  //   getProducto(pedidos).then((respuesta)=>{
  //     setProductos(respuesta.producto)
  //     console.log(productos)
  //   })
  // }, [])

  return (
   <Container>
      <h1>TU TASTY PEDIDO:</h1>
      <CardFin pedidos={pedidos} actualizar={actualizar} setActualizar={setActualizar} />
      </Container>
  );
};

export default Carrito;
