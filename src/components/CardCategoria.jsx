import React from "react";

import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardCategoria = ({ lista }) => {
  return (
    <>
      <Container className="cardContainC">
<<<<<<< HEAD
        {lista.map((categoria) => (
          <Link  style={{ textDecoration: 'none' }}
            className="cardLink"
            to={`/${categoria.nombre}`}
            key={categoria._id}
          >
            <Card className="cardCateg my-3 mx-4 d-block">
              <Card.Body className="cardCatBod">
                <div className="contImgC">
                  <Card.Img
                    src={categoria.img}
                    className="card-img-top imgC"
                    alt={categoria.nombre}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title cardLink">{categoria.nombre}</h5>
                </div>
=======
        {lista && lista.map((categoria) => (
          <Link className="cardLink" to={`/${categoria.nombre}`}>
              <Card className="cardCateg my-3 mx-4 d-block" >
                
              <Card.Body className="cardCatBod" key={categoria.id}>
                
                  
                    <div className="contImgC">
                      <Card.Img
                        src={categoria.img}
                        className="card-img-top imgC"
                        alt={categoria.nombre}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title cardLink">{categoria.nombre}</h5>
                    </div>
                 
             
>>>>>>> 7e52eb1505b2f1317a971c646c674bdb3d107f34
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Container>
    </>
  );
};

export default CardCategoria;
