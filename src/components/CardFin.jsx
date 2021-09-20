import React, { useEffect, useState } from "react";
import { mesasTodasGet, mesasPut } from "../helpers/mesas";
// import BtnSumarRestar from "./BtnSumarRestar";
import { Form, Card, Dropdown, Container, Button } from "react-bootstrap";
import { postComanda } from "../helpers/comandas";

const CardFin = ({ pedidos, eco, setEco }) => {
  const usuario = JSON.parse(localStorage.getItem("auth")).usuario;
  // const [descripcion, setDescripcion] = useState("");
 
  // const [mesa, setMesa] = useState([]);

  useEffect(() => {
    setEco(true);
    
    setEco(false);
  }, []);

  const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

 
  const ocuparMesa = (id) => {
    let mesita = { estado: false };
    mesasPut(id, mesita);
    console.log(id);
  };
//  const agregarDescripcion=(id)=>{
//   pedidos.map((prod)=>{
//     if (prod.id==id){
//         prod.descripcion=descripcion
// }})
//  }
  const confirmarPedido = () => {
    
    pedidos.map((pedido)=>{
    let product = {
      producto:pedido.nombre,
      cantidad:1,
      tipo:pedido.tipo,
      cliente:usuario.uid,
      nombreCliente:usuario.nombre,
      mesa:"1",
      estado:"Pendiente",
      descripcion: pedido.descripcion
    }
    console.log(product);
    postComanda(product).then((respuesta) => {
      console.log(respuesta.msg);
      if (respuesta.errors) {
        return window.alert(respuesta.errors[0].msg)
      }

  })})}

  // const [comanda, setComanda] = useState({
  //   producto: "",
  //   cantidad: 1,
  //   tipo: "",
  //   cliente: "",
  //   nombreCliente: "",
  //   mesa:"",
  //   estado: "Pendiente",
  //   descripcion,
  // });
  

  // const confirmarPed = (id) => {
  //  ocuparMesa(id)
  //  pedidos.map((pedido)=>{
  //   setComanda({
  //    producto:pedido.nombre,
  //    cantidad:1,
  //    tipo:pedido.tipo,
  //    cliente:usuario.uid,
  //    nombreCliente:usuario.nombre,
  //    mesa:mesa,
  //    estado:"Pendiente",
  //    descripcion: descripcion
  //   })

  //  })
  //   postComanda(comanda)


  // };

  // const confirmarPedido= (pedido)=>{
  //   let comanda = []
  //   comanda.push(pedido);
  //     localStorage.setItem('comanda', JSON.stringify(comanda));
  //
  // function calcularTotal (){

  //  const calcularTotal= () =>{
  //       total = 0
  //       carrito.forEach((id) => {
  //       const precioPedido = productos.precios((precio) => {
  //           return precio.id === parseInt(precio)
  //         });
  //         total = total + precioPedido[0].precio
  //     })
  //   }

  //   const vaciarCarrito=()=> {

  //     carrito = []

  //     renderizarCarrito()
  //     calcularTotal()
  // }
  // const handleChange=({id, target})=>{
  //   let descripcion= target.value
  //   pedidos.map((prod)=>{
  //       if (prod.id==id){
  //           prod.descripcion=descripcion
  //   }})
  //       console.log(pedidos)
  // }

  return (
    <Container>
      {pedidos.map((pedido) => (
        <Card style={{ width: "50rem" }} key={getRandomNumberBetween(1, 1000000)} className="col-10 col-md-8 col-lg-5 mb-3 login-card cardcarrito">
          <Card.Body>
            <Card.Title className="mb-2 ">
              {pedido.nombre}
            </Card.Title>
            <Card.Text>$ {pedido.precio}</Card.Text>
            <Form>
              <Form.Control
                // onChange={()=>agregarDescripcion(pedido.id)}
                label="Comments"
                as="textarea"
                placeholder="¿Nos queres aclarar algo sobre tu Tastypedido?"
                style={{ height: "100px" }}
              />
            </Form>
          </Card.Body>
        </Card>
      ))}

      <Button className="mb-4 pull-right" variant="light" onClick={()=>confirmarPedido()} >
        CONFIRMAR PEDIDO
      </Button>
    </Container>
  );
};

export default CardFin;
