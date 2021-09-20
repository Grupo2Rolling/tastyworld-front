import React, { useEffect } from "react";
// import BtnSumarRestar from "./BtnSumarRestar";
import { Form, Card, Dropdown, Container, Button } from "react-bootstrap";

const CardFin = ({ pedidos, eco, setEco }) => {
  // const usuario = JSON.parse(localStorage.getItem("auth")).usuario;
  // const [descripcion, setDescripcion] = useState("");
  // const [mesasLibres, setMesasLibres] = useState([]);

  // useEffect(() => {
  //   setEco(true);
  //   console.log(pedidos);
  //   setEco(false);
  // }, []);

  const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // useEffect(() => {
  //   mesasTodasGet().then((respuesta) => {
  //     let todas = respuesta.mesa;
  //     let libres = todas.filter((mesa) => {
  //       return mesa.estado === true;
  //     });
  //     setMesasLibres(libres);
  //   });
  // }, [mesasLibres]);


  // const [comanda, setComanda] = useState({
  //   producto: "",
  //   cantidad: 1,
  //   tipo: "",
  //   cliente: "",
  //   nombreCliente: "",
  //   mesa: "",
  //   estado: Pendiente,
  //   descripcion,
  // });
  // const ocuparMesa = (id) => {
  //   let mesa = { estado: false };
  //   mesasPut(id, mesa).then((respuesta) => {
  //     console.log(respuesta.mesa.estado);
  //   });
  // };

  // const confirmarPed = () => {
  //  ocuparMesa(id)
  //  pedidos.map((pedido)=>{
  //   setComanda({
  //    producto:pedido.nombre,
  //    cantidad:1,
  //    tipo:pedido.tipo,
  //    cliente:usuario.uid,
  //    nombreCliente:usuario.nombre,



  //   })

  //  })



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
     {/* <Form>
     <Form.Group className="mb-3">
              <Form.Label>Mesas libres</Form.Label>
              <Form.Control
                onChange={(e) => setMesa(e.target.value)}
                value={mesa.numero}
                as="select"
              >
                <option>Elige una mesa</option>
                {mesasLibres.map((mesa) => (
                  <option key={mesa.id}>{mesa.numero}</option>
                ))}
              </Form.Control>
            </Form.Group>
     </Form> */}
      {pedidos.map((pedido) => (
        <Card style={{ width: "50rem" }} key={getRandomNumberBetween(1, 1000)}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              {pedido.nombre}
            </Card.Subtitle>
            <Card.Text>{pedido.precio}</Card.Text>
            <Form>
              <Form.Control
                // onChange={(e) => setDescripcion(e.target.value)}
                label="Comments"
                as="textarea"
                placeholder="¿Nos queres aclarar algo sobre tu Tastypedido?"
                style={{ height: "100px" }}
              />
            </Form>
            <Card.Link href="Menu">Seguir comprando</Card.Link>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Cantidad
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <ListGroup variant="flush">
           <ListGroup.Item>TOTAL: calcularTotal() </ListGroup.Item>
           </ListGroup> */}
          </Card.Body>
        </Card>
      ))}

      {/* <Button variant="primary" onClick={confirmarPed}>
        CONFIRMAR PEDIDO
      </Button> */}
    </Container>
  );
};

export default CardFin;
