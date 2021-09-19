import React, {useEffect} from "react";
// import BtnSumarRestar from "./BtnSumarRestar";
import { Form, Card, Dropdown, Container, Button} from "react-bootstrap";

const CardFin = ({pedidos, actualizar, setActualizar}) => {
  
  useEffect(() => {
    setActualizar(false)
    console.log(pedidos);
    setActualizar(true)
    
  }, [pedidos])
  

  


// const [comanda, setComanda] = useState({
//     producto: "",
//     cantidad: 1,
//     tipo: "",
//     cliente: "",
//     nombreCliente: "",
//     mesa: "",
//     estado: Pendiente,
//     descripcion:""
//  })



// const handleChange=({id, target})=>{
//   let descripcion= target.value
//   pedidos.map((prod)=>{
//       if (prod.id==id){
//           prod.descripcion=descripcion
//   }})
//       console.log(pedidos)
// }


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
  
  return (
    <Container>
      {pedidos.map((pedido) => (
        <Card style={{ width: "50rem" }} key={pedido._id}>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              {pedido.nombre}
            </Card.Subtitle>
            <Card.Text>{pedido.precio}</Card.Text>
            <Form>
              <Form.Control
              // onChange= {handleChange (pedido._id)}
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
     
     <Button variant="primary">CONFIRMAR PEDIDO</Button>

    </Container>

  );
};

export default CardFin;
