import React from "react";
import { Link } from "react-router-dom";
import { Card, Col,Row, Container } from "react-bootstrap";
import Slider from "react-slick";

const CardContinente = ({ continentes }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    centerPadding: "10px",
    slide: "Card",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 3,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 4,
          initialSlide: 4,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
     
        <Slider {...settings}>
        
        <Card className="cardConti">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/comidasmundo/`}
        
                >
                  <Card.Body className="cardCont">
                    <Row>
                      <Card.Img
                        src='https://i.postimg.cc/3xd8QZp8/mundo.png'
                        itemID="imgCon"
                        alt="Mundo"
                      />
                    </Row>
                    <h5 className="card-title text-center nombreCont">
                      Todos             </h5>
                  </Card.Body>
                </Link>
              </Card>
          {continentes.map((continente) => (
          <Container d-flex flex-col>
              <Card className="cardConti">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/comidasmundo/${continente.nombre}`}
                  key={continente._id}
                >
                  
                  <Card.Body className="cardCont">
                  
                      
                        <Col>
                          <Card.Img
                            src={continente.img}
                            itemID="imgCon"
                            alt={continente.nombre}
                          />
                        </Col>
                        <Col>
                          <h5 className="card-title text-center nombreCont">
                            {continente.nombre}
                          </h5>
                        </Col>
                      
                    
                  </Card.Body>
                 
                </Link>
              </Card>
              </Container>
          ))}
        
        </Slider>
      
    </>
  );
};

export default CardContinente;
