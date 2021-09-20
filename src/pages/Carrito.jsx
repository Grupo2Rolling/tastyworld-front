import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import CardFin from '../components/CardFin'
import { getProducto } from '../helpers/productos'


const Carrito = () => {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || []
  const [pedidos, setPedidos] = useState([])
  const [eco, setEco] = useState(true)
  
 

  
const token =
JSON.parse(localStorage.getItem("auth")) &&
JSON.parse(localStorage.getItem("auth")).token;

  useEffect(() => {
    let pedido = []
    carrito.map((producto) => {
      getProducto(producto,token).then((respuesta) => {
        pedido.push(respuesta.producto)
        setPedidos(pedido)
      })
    })
    
  }, [eco])



  return (
    <Container className="tituloPag inicioBackground text-center min-height mt-5 pt-5">
      <h1>TU TASTY PEDIDO:</h1>
      
      <CardFin pedidos={pedidos} eco={eco} setEco={setEco} />
    </Container>
  )
}

export default Carrito