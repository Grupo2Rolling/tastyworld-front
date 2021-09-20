import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Form, Card, Dropdown, Container, Button } from "react-bootstrap";
import { postComandaAdmin } from "../helpers/comandas";

const token =
  JSON.parse(localStorage.getItem("auth")) &&
  JSON.parse(localStorage.getItem("auth")).token;

const CardFin = ({ pedidos, setEco }) => {
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

  // const ocuparMesa = (id) => {
  //   let mesita = { estado: false };
  //   mesasPut(id, mesita);
  //   console.log(id);
  // };
  //  const agregarDescripcion=(id)=>{
  //   pedidos.map((prod)=>{
  //     if (prod.id==id){
  //         prod.descripcion=descripcion
  // }})
  //  }
  const confirmarPedido = () => {
    pedidos.map((pedido) => {
      let product = {
        producto: pedido.nombre,
        prodId: pedido.id,
        cantidad: 1,
        tipo: pedido.tipo,
        nombreCliente: usuario.nombre,
        mesa: "1",
        estado: "Pendiente",
        numeroPedido: getRandomNumberBetween(1, 100000),
        descripcion: pedido.descripcion,
      };
      console.log(product);
      postComandaAdmin(product,token).then((respuesta) => {
        console.log(respuesta.msg);
        if (respuesta.errors) {
          return window.alert(respuesta.errors[0].msg);
        }else{
          Swal.fire(
            {
              title: "Pedido confirmado",
             
              icon: "success",
              confirmButtonColor: "#3085d6",
            });
        }
      });

    });
    
  };


 

  return (
    <Container className="text-center">
      {pedidos.map((pedido) => (
        <Card
         
          key={getRandomNumberBetween(1, 1000000)}
          className="  mb-3 mi-4 login-card cardcarrito justify-center"
        >
          <Card.Body>
            <Card.Title className="mb-2 ">{pedido.nombre}</Card.Title>
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

      <Button
        className="mb-4 pull-right"
        variant="light"
        onClick={() => confirmarPedido()}
      >
        CONFIRMAR PEDIDO
      </Button>
    </Container>
  );
};

export default CardFin;