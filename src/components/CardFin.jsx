import React from "react";
import Swal from "sweetalert2";
import { Form, Card, Container, Button } from "react-bootstrap";
import { postComandaAdmin } from "../helpers/comandas";
import { useHistory } from "react-router-dom";

const CardFin = ({ pedidos, setEco, setPedidos, cargarCarrito }) => {
  const token =
    JSON.parse(localStorage.getItem("auth")) &&
    JSON.parse(localStorage.getItem("auth")).token;
  const history = useHistory();
  const usuario = JSON.parse(localStorage.getItem("auth")).usuario;
  let precioTotal = 0;
  // useEffect(() => {
  //   setEco(true);

  //   setEco(false);
  // });
  // Symbol(pedido).toString + pedido
  const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  pedidos.forEach(function (pedido) {
    precioTotal += Number(pedido.precio);

    pedido.numPlato = getRandomNumberBetween(1, 10000);
  });

  const confirmarPedido = () => {
    pedidos.forEach((pedido) => {
      let product = {
        producto: pedido.nombre,
        prodId: pedido._id,
        cantidad: 1,
        tipo: pedido.tipo,
        nombreCliente: usuario.nombre,
        mesa: "1",
        estado: "Pendiente",
        numeroPedido: getRandomNumberBetween(1, 100000),
        descripcion:
          pedido?.notas || "No se especificaron notas para este pedido",
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
  const borrarProd = (pedido) => {
    console.log(`Id q aprieto ${pedido._id}`);
    // console.log(`numPlato q aprito ${pedido.numPlato}`);

    let newCarrito = [];
    pedidos.forEach((element) => {
      if (element.numPlato !== pedido.numPlato) {
        newCarrito.push(element._id);
      }
    });
    localStorage.setItem("carrito", JSON.stringify(newCarrito));
    cargarCarrito(newCarrito);
  };

  return (
    <Container className="text-center">
      <h1>Precio total:{precioTotal}</h1>
      {pedidos.map((pedido, index) => (
        <Card
          key={getRandomNumberBetween(1, 1000000)}
          className="  mb-3 mi-4 login-card cardcarrito justify-center"
        >
          <Card.Body>
            <Card.Title className="mb-2 ">{pedido.nombre}</Card.Title>
            <Card.Text>$ {pedido.precio}</Card.Text>
            <Form>
              <Form.Control
                onChange={(e) => {
                  pedidos[index] = { ...pedido, notas: e.target.value };
                  setPedidos(pedidos);
                }}
                label="Comments"
                as="textarea"
                maxLength="150"
                placeholder="¿Nos queres aclarar algo sobre tu Tastypedido?"
                style={{ height: "100px" }}
              />
            </Form>
            <Card.Text> {pedido.cantidad}</Card.Text>
          </Card.Body>
          <Button
            className="mb-4 pull-right mt-3"
            variant="light"
            onClick={(e) => borrarProd(pedido)}
          >
            BORRAR
          </Button>
        </Card>
      ))}

      <Button
        className="mb-4 pull-right mt-3"
        variant="light"
        onClick={() => confirmarPedido()}
      >
        CONFIRMAR PEDIDO
      </Button>
    </Container>
  );
};

export default CardFin;
