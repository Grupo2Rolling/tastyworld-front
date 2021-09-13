import React from "react";
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import { Carousel,  } from "react-bootstrap";
const CardContinente = ({ lista, menus,setMenus }) => {

  const filtrarMenus=(e)=>{
    console.log(e.target);

  }
  return (

    <>
      <Carousel>
      {lista.map((continente) => (
      <Carousel.Item>
          
              <Card className="cardCateg" onClick={filtrarMenus} >
                
              <Card.Body key={continente.id}>
                
                  
                    <div className="contImgC">
                      <Card.Img
                        src={continente.img}
                        className="card-img-top imgC"
                        alt={continente.nombre}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{continente.nombre}</h5>
                    </div>
                 
             
              </Card.Body>
              </Card>
         
          </Carousel.Item>
               ))}
      </Carousel>
    </>
  );
};

export default CardContinente;