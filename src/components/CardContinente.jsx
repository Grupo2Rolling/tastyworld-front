import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Card, Col, Button } from "react-bootstrap";
import { Carousel,  } from "react-bootstrap";
import Slider from "react-slick";
import { render } from "react-dom";

const CardContinente = ({ continentes}) => {
  

  // useEffect(() => {
  //   handleClick()
    
  // })
  
  
 
  const settings = {
    dots: false,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows: false,
    centerPadding: '10px',
    slide: 'Card',
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
      
      <Slider  {...settings}>

        {continentes.map((continente) => (
       
               
                  
                      <Card className="cardCont">
                        <Link to={`/comidasmundo/${continente.nombre}`}>
                        <div className="contImgC">
                                  <Card.Img
                                    src={continente.img}
                                    className="imgC"
                                    variant="top"
                                    alt={continente.nombre}
                                  />
                                </div>
                                <Card.Body className="cardCont" key={continente.id} >
                                
                               
                          
                                    <h5 className="card-title text-center" >{continente.nombre}</h5>
                          
                                
                          </Card.Body>
                        </Link>
                        </Card>
                  
                  
               
              
              
                 ))}
       </Slider>
      
    </>
  );
};

export default CardContinente;