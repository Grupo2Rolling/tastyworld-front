import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Form, Card, Dropdown, Container, Button } from "react-bootstrap";
import { postComandaAdmin } from "../helpers/comandas";
import { useHistory } from "react-router-dom";

const token = JSON.parse(localStorage.getItem("auth")).token;

const CardFin = ({ pedidos, setEco }) => {
  const history = useHistory();
  const usuario = JSON.parse(localStorage.getItem("auth")).usuario;

  useEffect(() => {
    setEco(true);

    setEco(false);
  }, []);

  const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

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

      postComandaAdmin(product, token).then((respuesta) => {
        if (respuesta.errors) {
          return window.alert(respuesta.errors[0].msg);
        } else {
          Swal.fire({
            title: "Pedido confirmado",
            icon: "success",
            confirmButtonColor: "#3085d6",
          });
          const redireccion = () => history.push("/");
          redireccion();
        }
      });
    });
    localStorage.setItem("carrito", JSON.stringify([]));
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
                // onChange={(e)=> agregarDescripcion(pedido.id)}
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
