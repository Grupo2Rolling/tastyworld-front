import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Col } from "react-bootstrap";
import { Carousel,  } from "react-bootstrap";
import Slider from "react-slick";
import { render } from "react-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"
const CardContinente = ({ lista, menus,setMenus }) => {

  const filtrarMenus=(continente)=>{
    
    console.log(continente);

  }
 
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <>
      <Container fluid>
      <Slider {...settings}>
        {lista.map((continente) => (
       
              <Col className='mx-3 d-block'>
                <Card className="cardCateg my-3 mx-3">
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
              </Col>
              
                 ))}
       </Slider>
      </Container>
    </>
  );
};

export default CardContinente;