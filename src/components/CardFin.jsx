import React from "react";
// import BtnSumarRestar from "./BtnSumarRestar";
import { Row, Col, Form, Card, Button, Dropdown } from "react-bootstrap";

const CardFin = () => {
  return (
    <div>
      <Row className="justify-content-md-center">
        
          <Col md="auto">
            <Card style={{ width: "50rem" }}>
              <Card.Body>
                <Card.Title>TU TASTY PEDIDO:</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Comida
                </Card.Subtitle>
                <Card.Text>
                  $$$$
                </Card.Text>
                <Form>
                  
                    <Form.Control controlId="floatingTextarea2" label="Comments"
                      as="textarea"
                      placeholder="Leave a comment here"
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

               
              </Card.Body>
              <Button variant="primary">IR A PAGAR</Button>
            </Card>
          </Col>;
       
      </Row>
    </div>
  );
};

export default CardFin;
