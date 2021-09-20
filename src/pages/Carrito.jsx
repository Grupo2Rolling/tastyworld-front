import { useState, useEffect } from "react";
import CardFin from "../components/CardFin";
import { getProducto } from "../helpers/productos";


const Carrito = () => {
  const [pedidos, setPedidos] = useState([]);
  // const [productos, setProductos] = useState ([])

  let pedido = []
    const carrito = [
      "61427df9178b6ad91f7ad4b7",
      "6143dafe7c6042373d8a1e7d",
      "614533d6d1cbc58471a648ec",
    ]
    // JSON.parse(localStorage.getItem("carrito"));

  
  useEffect(() => {
        
    carrito.map((producto) => {
      getProducto(producto).then((respuesta) => {
        // let producto = respuesta.producto;
        pedido.push(respuesta.producto);
      });
    
    });
    // console.log(pedido);
    setPedidos(pedido) 
    console.log (pedidos)
  }, [] );

  // useEffect(()=>{
  //   getProducto(pedidos).then((respuesta)=>{
  //     setProductos(respuesta.producto)
  //     console.log(productos)
  //   })
  // }, [])

  return (
    <div className="min-height">
      <h1>TU TASTY PEDIDO:</h1>
      <CardFin pedidos={pedidos} />
    </div>
  );
};

export default Carrito;
