import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { Navbar, Nav, Container } from 'react-bootstrap'

export const TastyNavbar = () => {
    return(
        <div className="App">
  <Navbar fixed="top" bg="light" variant="light">
    <Container>
    <Nav className="ms-auto">
      <Nav.Link >Login</Nav.Link>
      <Nav.Link >Inicio</Nav.Link>
      <Nav.Link >Pedidos</Nav.Link>
    <Navbar.Brand className="d-flex align-items-center" >TASTY-WORLD</Navbar.Brand>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}
