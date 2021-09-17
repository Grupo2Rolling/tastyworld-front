import React, { useState, useEffect } from 'react'
import { getComandas } from '../helpers/comandasCocina'
import CardCocina from '../components/CardCocina'
import { Container } from 'react-bootstrap';

const Cocina = () => {
  const [comandas, setComandas] = useState([]);
  const [comandasCocina, setComandasCocina] =useState([])

  useEffect(() => {
    getComandas().then((respuesta) => {
      setComandas(respuesta.comanda);
      console.log(comandas)
    });
  }, []);

  useEffect(()=>{
    let comandaCocina = comandas.filter((comanda) => {
      return comanda.tipo === "Plato";
    });
    setComandasCocina(comandaCocina);
    console.log(comandaCocina);
  }, []);
  
  return (
    <>
      <Container fluid className="mt-2">
        <CardCocina comandas={comandasCocina} />
      </Container>
    </>
  );
};


export default Cocina
