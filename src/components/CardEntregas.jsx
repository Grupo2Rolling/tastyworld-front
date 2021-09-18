import React from 'react'
import {
  Card,
  Row,
  Col,
  ListGroup,
  Button,
  ButtonToolbar,
} from 'react-bootstrap'

const CardEntregas = ({ comandas }) => {
  return (
    <Row xs={1} md={5} className="g-2">
      {comandas.map((comanda) => (
        <Col key={comanda._id} className="mb-2">
          <Card>
            <Card.Body>
              <Card.Header>Pedido: {comanda.numeroPedido}</Card.Header>
              <Card.Title className="m-2">{comanda.producto}</Card.Title>
              <ListGroup>
                <ListGroup.Item>Cantidad: {comanda.cantidad}</ListGroup.Item>
                <ListGroup.Item>Notas: {comanda.descripcion}</ListGroup.Item>
                <ListGroup.Item>
                  Cliente: {comanda.nombreCliente}
                </ListGroup.Item>
                <ListGroup.Item>Mesa: {comanda.mesa}</ListGroup.Item>
                <ListGroup.Item>Estado: {comanda.estado}</ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <ButtonToolbar
                className="justify-content-center"
                size="xl"
                aria-label="Basic example"
              >
                <Button className="me-5" variant="danger">
                  Rechazar
                </Button>
                <Button className="mi-5" variant="success">
                  Finalizada
                </Button>
              </ButtonToolbar>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default CardEntregas
