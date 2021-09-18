import {useState, useEffect} from 'react'
import CardFin from '../components/CardFin'
import { getProducto } from '../helpers/productos'

const Carrito = () => {

  const [pedidos, setPedidos] = useState([])
  const [productos, setProductos] = useState ([])

  useEffect(()=>{
    const carrito= JSON.parse(localStorage.getItem('carrito'))
 let pedido = []
    carrito.map((producto)=>{
    getProducto(producto.id).then((respuesta)=>{
      let menu = respuesta.producto
      pedido.push(menu)
    })
    console.log(pedido)
  })
  }, [])

  useEffect(()=>{
    getProducto(pedidos).then((respuesta)=>{
      setProductos(respuesta.producto)
      console.log(productos)
    })
  }, []) 
  



    return (
        <div>
      <CardFin pedidos={pedidos}/>
        

            
        </div>
    )
}

export default Carrito
