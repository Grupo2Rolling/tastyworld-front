import React  from "react";
import { Link } from "react-router-dom";
import {  Card, Col } from "react-bootstrap";
import Slider from "react-slick";

const CardContinente = ({ continentes }) => {
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
    arrows: true,
    centerPadding: "10px",
    slide: "Card",
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        {continentes.map((continente) => (
          <Col>
            <Card className="cardConti">
              <Link
                to={`/comidasmundo/${continente.nombre}`}
                key={continente.id}
              >
                <Card.Body className="cardCont">
                  <Card.Img
                    src={continente.img}
                    itemID="imgCon"
                    alt={continente.nombre}
                  />
                  <h5 className="card-title text-center nombreCont">
                    {continente.nombre}
                  </h5>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Slider>
    </>
  );
};

export default CardContinente;
